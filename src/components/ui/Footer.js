import React from 'react';


const Footer = () => {
    return (
        <div className="footer-container row">
            <div className="nextwaveAi-settings row align-center align-right">
                <div className="nextwaveAi-settings-wrapper">
                    <div className="nextwaveAi-management-settings-container">
                        <svg
                            width="24"
                            height="24"
                            fill="none"
                            // xmlns="http://www.w3.org/2000/svg"
                            className="nextwaveAi-management-settings-icon"
                        >
                            <rect width="24" height="24" rx="12" fill="#000" fillOpacity=".9"></rect>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.988 13.933c-1.118 0-1.9-.794-1.9-1.932s.782-1.933 1.9-1.933c1.12 0 1.9.795 1.9 1.933s-.78 1.932-1.9 1.932m-5.883-3.865h3.792l-.092.088c-.524.503-.824 1.175-.824 1.845 0 1.698 1.264 2.93 3.007 2.93 1.745 0 3.012-1.232 3.012-2.93 0-1.698-1.267-2.93-3.012-2.93H9.113c-1.743 0-3.008 1.232-3.008 2.93 0 1.698 1.265 2.93 3.008 2.93h2.095v-.998H9.105c-1.11 0-1.888-.794-1.892-1.932 0-1.12.795-1.933 1.892-1.933"
                                fill="#fff"
                            ></path>
                        </svg>
                        <span className="nextwaveAi-management-title">
                            NextWaveAI
                        </span>
                    </div>
                </div>
            </div>
            <div className="copyright row align-center align-right">
                <div className="copyright-wrapper">
                    <div className="text-component">
                        <p>© 2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
