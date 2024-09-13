import React, { useState } from 'react';

function Account({ onClose }) {
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (phoneNumber) {
            // Process the phone number (e.g., call API)
            alert(`Phone number submitted: ${phoneNumber}`);
        } else {
            alert('Please enter a valid phone number');
        }
    };

    return (
        <div className="account-form-modal">
            <div className="account-form">
                <h2>Sign in or create an account with just your phone number</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Phone Number:
                        <input 
                            type="tel" 
                            required 
                            placeholder="Enter your phone number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </label>
                    <button type="submit">Continue</button>
                </form>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Account;
