
import React, { useState } from 'react';
import Account from './Account'; // Import the Account component

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
                    <a href="#menu">Menu</a>
                    <a href="#catering">Catering</a>
                    <a href="#about">About</a>
                </div>
                <div className="logo">
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
        </>
    );
}

export default TopNav;
