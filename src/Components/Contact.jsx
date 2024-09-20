import React from 'react'

function Contact() {
    return (
        <>
            <div className="h-40 contact-container-top"></div>
            <div className="h-80 bg-[#8a84f8] contact-container-bottom">
                <div className="map-overlay h-[100%]">
                    <h1 className="text-center text-[clamp(30px,10vw,40px)] font-[var(--max-weight)] text-white">Don't be shy! Hit me up! 👇</h1>
                    <button className="mx-auto my-6 block  py-3 px-5 bg-[var(--theme-color)] font-[var(--mid-weight)] text-white rounded-md hover:bg-purple-700 transition duration-300 shadow-[0_3px_8px_rgba(0,0,0,0.6)]">
                        Email
                        <svg className="inline ml-2" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#fff"></path> </g></svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Contact