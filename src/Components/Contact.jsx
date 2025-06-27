import React, { useState } from 'react';

function Contact() {
    const [showPopover, setShowPopover] = useState(false);

    const handleMouseEnter = () => {
        setShowPopover(true);
    };

    const handleMouseLeave = () => {
        setShowPopover(false);
    };

    return (
        <>
            <div className="h-40 contact-container-top"></div>
            <div className="h-[350px] bg-[#8a84f8] contact-container-bottom" id="contact">
                <div className="map-overlay px-5 h-[100%]">
                    <h1 className="text-center text-[clamp(30px,10vw,40px)] font-[var(--max-weight)] text-white leading-8">
                        Let’s make something awesome together!🤝
                    </h1>
                    <div className="relative w-fit mx-auto my-6">
                        <a
                            href="mailto:shivdutt059@gmail.com"
                            className="w-[150px] text-center block py-3 px-5 bg-[var(--theme-color)] font-[var(--mid-weight)] text-white rounded-md hover:bg-purple-700 transition duration-300 shadow-[0_3px_8px_rgba(0,0,0,0.6)]"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            Email
                            <svg className="inline ml-2" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                                    fill="#fff"
                                />
                            </svg>
                        </a>

                        {showPopover && (
                            <div className="absolute left-1/2 -translate-x-1/2 mt-2 p-2 bg-black text-white text-sm rounded-md shadow-lg">
                                shivdutt059@gmail.com
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
