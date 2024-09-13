import React from 'react';


export default function TopFooter() {
    return (
        <footer className="topFooter">
            <div className="footer-container">
                <div className="footer-location">
                    <h4>Location & Hours</h4>
                    <p>Kitchen<br />
                        2345 Text<br />
                        TXT US, 20105<br />
                        Phn.no: (111) 555-0033<br />
                        Email: Text@gmail.com<br />
                    </p>
                    <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="get-directions">Get Directions</a>
                </div>
                <div className="footer-hours">
                    <h4>Hours</h4>
                    <p>
                        Monday: 9:00 AM - 9:00 PM<br />
                        Tuesday: 9:00 AM - 9:00 PM<br />
                        Wednesday: 9:00 AM - 9:00 PM<br />
                        Thursday: 9:00 AM - 9:00 PM<br />
                        Friday: 9:00 AM - 9:00 PM<br />
                        Saturday: 9:00 AM - 9:00 PM<br />
                        Sunday: 9:00 AM - 9:00 PM
                    </p>
                </div>
            </div>
            {/* <div className="footer-logo">
                    <img src="/path-to-your-logo.png" alt="Logo" />
            </div> */}
        </footer>
    );
}

