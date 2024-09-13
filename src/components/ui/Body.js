import React, { useState } from 'react';
import MilletImage from '././../images/Millet.jpg';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('batters');
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [modalData, setModalData] = useState(null); // Store data for modal
    const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setSearchVisible(false); // Hide search box when changing tabs
    };

    const handleSearchClick = () => {
        setSearchVisible(!searchVisible); // Toggle search box visibility
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleItemClick = (item) => {
        setModalData(item); // Set the clicked item data for the modal
        setIsModalOpen(true); // Open the modal
    };

    const handleModalClose = () => {
        setIsModalOpen(false); // Close the modal
    };

    const content = {
        batters: [
            {
                name: "Millet Dosa Batter",
                image: MilletImage,
                description: "Millet dosa batter is a healthier alternative to traditional dosa batter, incorporating millet grains instead of or in addition to rice. Millets are highly nutritious, gluten-free grains that are rich in fiber, vitamins, and minerals. Making dosa batter with millets can add a unique flavor and texture to the dosas while providing additional health benefits. No Preservatives or Salt Added.",
                price: "$7.00",
                calories: "70 Cal",
                dietaryPreferences: ["Gluten-Free", "Vegan", "Organic"],
                optionalIngredients: ["Salt", "Spices"],
                sizeOptions: ["Small", "Medium", "Large"]
            },
            // Add other items here
        ],
        chutneys: [
            {
                name: "chutney1",
                image: MilletImage,
                description: "Millet dosa batter is a healthier alternative to traditional dosa batter, incorporating millet grains instead of or in addition to rice. Millets are highly nutritious, gluten-free grains that are rich in fiber, vitamins, and minerals. Making dosa batter with millets can add a unique flavor and texture to the dosas while providing additional health benefits. No Preservatives or Salt Added.",
                price: "$10.00",
                calories: "70 Cal",
                dietaryPreferences: ["Gluten-Free", "Vegan", "Organic"],
                optionalIngredients: ["Salt", "Spices"],
                sizeOptions: ["Small", "Medium", "Large"]
            },
            // Add other items here
        ],

        // Other tabs' data (chutneys, curd, etc.) would go here
    };

    const filteredContent = content[activeTab].filter(item =>
        item.name.toLowerCase().includes(searchTerm)
    );

    const truncateDescription = (description, wordLimit) => {
        return description.split(' ').slice(0, wordLimit).join(' ') + '...';
    };

    return (
        <div className="tabs-container">
            <div className="tabs">
                <button onClick={() => handleTabClick('batters')}>Batters</button>
                <button onClick={() => handleTabClick('chutneys')}>Chutneys</button>
                <button onClick={() => handleTabClick('curd')}>Curd</button>
                <button onClick={() => handleTabClick('pickles')}>Pickles</button>
                <button onClick={handleSearchClick}>Search</button>
            </div>

            {searchVisible && (
                <div className="search-box">
                    <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
                </div>
            )}

            <div className="tab-content">
                <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
                <div className="content-list">
                    {filteredContent.length > 0 ? (
                        filteredContent.map((item, index) => (
                            <div key={index} className="content-item" onClick={() => handleItemClick(item)}>
                                <img src={item.image} alt={item.name} className="content-image" />
                                <p>{item.name}</p>
                                <p className="item-description">
                                    {truncateDescription(item.description, 10)}
                                </p>
                                <p>{item.calories}</p>
                                <p>{item.price}</p>
                            </div>
                        ))
                    ) : (
                        <div className="no-results">No results found</div>
                    )}
                </div>
            </div>

            {isModalOpen && modalData && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={handleModalClose}>X</span>
                        <img src={modalData.image} alt={modalData.name} className="modal-image" />
                        <h2>{modalData.name}</h2>
                        <p>{modalData.description}</p>
                        <p><strong>Price:</strong> {modalData.price}</p>
                        <p><strong>Calories:</strong> {modalData.calories}</p>

                        <h3>Dietary Preferences</h3>
                        <ul>
                            {modalData.dietaryPreferences.map((pref, index) => (
                                <li key={index}>{pref}</li>
                            ))}
                        </ul>

                        <h3>Optional Ingredients</h3>
                        <select>
                            {modalData.optionalIngredients.map((ingredient, index) => (
                                <option key={index}>{ingredient}</option>
                            ))}
                        </select>

                        <h3>Size</h3>
                        <select>
                            {modalData.sizeOptions.map((size, index) => (
                                <option key={index}>{size}</option>
                            ))}
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tabs;
