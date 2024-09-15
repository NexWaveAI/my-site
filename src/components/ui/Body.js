import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import search icon from react-icons
import MilletImage from './../images/Millet.jpg';
import Dosa from './../images/Dosa.png';
import Chutney from './../images/Chuteney.jpg';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('batters');
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [modalData, setModalData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setSearchVisible(false);
    };

    const handleSearchClick = () => {
        setSearchVisible(!searchVisible);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleItemClick = (item) => {
        setModalData(item);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const content = {
        batters: [
            {
                name: "Millet Dosa Batter",
                image: MilletImage,
                description: "Millet dosa batter is a healthier alternative to traditional dosa batter, incorporating millet grains instead of or in addition to rice. Millets are highly nutritious, gluten-free grains that are rich in fiber, vitamins, and minerals. Making dosa batter with millets can add a unique flavor and texture to the dosas while providing additional health benefits.",
                price: "$7.00",
                calories: "70 Cal",
                dietaryPreferences: ["Gluten-Free", "Vegan", "Organic"],
                optionalIngredients: ["Salt", "Spices"],
                sizeOptions: ["Small", "Medium", "Large"]
            },
            {
                name: "Dosa Batter",
                image: Dosa,
                description: "Traditional dosa batter made with rice and lentils.",
                price: "$5.00",
                calories: "70 Cal",
                dietaryPreferences: ["Gluten-Free", "Vegan", "Organic"],
                optionalIngredients: ["Salt", "Spices"],
                sizeOptions: ["Small", "Medium", "Large"]
            },
        ],
        chutneys: [
            {
                name: "Chutney 1",
                image: Chutney,
                description: "Delicious chutney to accompany any meal...",
                price: "$10.00",
                calories: "50 Cal",
                dietaryPreferences: ["Gluten-Free", "Vegan"],
                optionalIngredients: ["Spices"],
                sizeOptions: ["Small", "Large"]
            },
        ],
    };

    const filteredContent = content[activeTab].filter(item =>
        item.name.toLowerCase().includes(searchTerm)
    );

    const truncateDescription = (description, wordLimit) => {
        return description.split(' ').slice(0, wordLimit).join(' ') + '...';
    };

    return (
        <div className="tabs-container">
            <div className="tabs-right">
                <button className={activeTab === 'batters' ? 'active' : ''} onClick={() => handleTabClick('batters')}>Batters</button>
                <button className={activeTab === 'chutneys' ? 'active' : ''} onClick={() => handleTabClick('chutneys')}>Chutneys</button>
                <button className={activeTab === 'curd' ? 'active' : ''} onClick={() => handleTabClick('curd')}>Curd</button>
                <button className={activeTab === 'pickles' ? 'active' : ''} onClick={() => handleTabClick('pickles')}>Pickles</button>
                
                <button className="search-button" onClick={handleSearchClick}>
                    <FaSearch />
                </button>

                {searchVisible && (
                    <div className="search-box animated-search">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                )}
            </div>

            <div className="tab-content">
                <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
                <div className="content-grid">
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
                        <span className="close-button" onClick={handleModalClose}>Close</span>
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
