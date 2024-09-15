import React, { useState } from 'react';
import Account from './Account'; // Import the Account component
import img from '../images/Millet.jpg'; // Example image

function TopNav() {
    const [showAccountForm, setShowAccountForm] = useState(false);

    const handleAccountClick = () => {
        setShowAccountForm(true); // Open the account form
    };

    const handleCloseAccountForm = () => {
        setShowAccountForm(false); // Close the account form
    };

    return (
        <>
            <nav className="topnav">
                <div className="left-tab">
                    <a href="/menu">Menu</a>
                    <a href="#catering">Catering</a>
                    <a href="#about">About</a>
                </div>
                <div className="logo">
                    <h3>Country Delight Kitchen</h3>
                    <img src="/path-to-your-logo.png" alt="Logo" />
                </div>
                <div className="right-tab">
                    <a href="#search">Search</a>
                    <a href="#account" onClick={handleAccountClick}>Account</a>
                    <a href="#cart">Cart</a>
                </div>
            </nav>

            {/* Render Account form conditionally */}
            {showAccountForm && <Account onClose={handleCloseAccountForm} />}

            {/* Image Gallery Section */}
            <div className="image-gallery">
                <div className="image-track">
                    <img src={img} alt="Image 1" />
                    <img src={img} alt="Image 2" />
                    <img src={img} alt="Image 3" />
                    <img src={img} alt="Image 4" />
                    {/* Duplicate images for seamless scroll */}
                    <img src={img} alt="Image 1 Duplicate" />
                    <img src={img} alt="Image 2 Duplicate" />
                    <img src={img} alt="Image 3 Duplicate" />
                    <img src={img} alt="Image 4 Duplicate" />
                </div>
            </div>
        </>
    );
}

export default TopNav;
