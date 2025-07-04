import React, { useState } from 'react'

// Import screenshots for carousel
import ss1 from "../assets/project-demo/gorr/ss1.png"
import ss2 from "../assets/project-demo/gorr/ss2.png"
import ss3 from "../assets/project-demo/gorr/ss3.png"
import ss4 from "../assets/project-demo/gorr/ss4.png"
import arch from "../assets/project-demo/gorr/gorr-architecture.jpg"

// Heimdall media
import heimdallSS1 from "../assets/project-demo/heimdall/ss1.png"
import heimdallSS2 from "../assets/project-demo/heimdall/ss2.png"
import heimdallSS3 from "../assets/project-demo/heimdall/ss3.png"
import heimdallSS4 from "../assets/project-demo/heimdall/ss4.png"
import heimdallSS5 from "../assets/project-demo/heimdall/ss5.png"
import heimdallArch from "../assets/project-demo/heimdall/heimdall-architecture.jpg"

const projects = [
    {
        id: "gorr",
        name: "Gorr",
        video: "https://www.youtube.com/embed/kSnP80ctjlw?si=A1sgTAKp-RstJBC2", // YouTube embed link
        screenshots: [
            "https://www.youtube.com/embed/kSnP80ctjlw?si=A1sgTAKp-RstJBC2", // Use YouTube embed as first "screenshot"
            ss1, ss2, ss3, ss4, arch
        ],
        description: (
            <>
                <span className="font-semibold">Gorr</span> is a sophisticated microservices-based deployment platform designed to streamline project deployments with real-time monitoring, efficient resource management, and seamless integration with cloud services.<br /><br />
            </>
        ),
        technologies: [
            "nodejs", "express", "react", "socketio", "postgresql", "prisma", "redis", "aws", "vite", "tailwindcss", "docker"
        ],
        codeUrl: "https://github.com/shivdutt-B/gorr",
        liveUrl: "https://gorr-phi.vercel.app/"
    },
    {
        id: "heimdall",
        name: "Heimdall",
        video: "https://www.youtube.com/embed/-B-Hw2NKQGc?si=ADp4LIFFJ-xvqmBE", // YouTube embed link
        screenshots: [
            "https://www.youtube.com/embed/-B-Hw2NKQGc?si=ADp4LIFFJ-xvqmBE", // Use YouTube embed as first "screenshot"
            heimdallSS1, heimdallSS2, heimdallSS3, heimdallSS4, heimdallSS5, heimdallArch
        ],
        description: (
            <>
                <div className="mb-3">
                    <span className="font-semibold">Heimdall</span> is a comprehensive ping and uptime monitoring platform designed to eliminate cold starts on free hosting platforms like <b>Render</b>, <b>Railway</b>, and <b>Fly.io</b>. By intelligently pinging your backend servers at customizable intervals, Heimdall ensures optimal performance while providing detailed analytics and instant alerts.
                </div>
            </>
        ),
        technologies: [
            "nodejs", "express", "react", "recoil", "postgresql", "prisma", "redis", "bullmq", "nodemailer", "docker", "aws", "render", "vercel", "tailwindcss"
        ],
        codeUrl: "https://github.com/shivdutt-B/heimdall",
        liveUrl: "https://heimdall-pings.vercel.app/"
    }
];

function Carousel({ items, openIdx = 0, onPlayVideo, videoClassName }) {
    const [current, setCurrent] = useState(openIdx);

    // Check if the item is a YouTube embed link
    const isYouTubeEmbed = (src) =>
        typeof src === "string" && src.startsWith("https://www.youtube.com/embed/");

    const isVideo = (src) =>
        isYouTubeEmbed(src) ||
        (typeof src === "string" && (src.includes(".mov") || src.includes(".mp4")));

    const goPrev = () => setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    const goNext = () => setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));

    return (
        <div className="relative w-full flex flex-col items-center">
            <div className="w-full flex items-center justify-center">
                <button
                    className="absolute left-2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition"
                    onClick={goPrev}
                    aria-label="Previous"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                >
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <div className="w-full flex items-center justify-center overflow-hidden" style={{ minHeight: 220 }}>
                    <div
                        key={current}
                        className="w-full flex items-center justify-center animate-carousel-fade"
                        style={{ position: "relative" }}
                    >
                        {isYouTubeEmbed(items[current]) ? (
                            <div className="relative w-full flex items-center justify-center">
                                <iframe
                                    className={videoClassName || "rounded-[8px] w-full max-h-[350px] object-contain shadow-lg"}
                                    src={items[current]}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    style={{
                                        maxHeight: 350,
                                        width: "100%",
                                        maxWidth: 500,
                                        aspectRatio: "16/9",
                                        backgroundColor: "black",
                                        borderRadius: 8,
                                        border: "none"
                                    }}
                                />
                            </div>
                        ) : isVideo(items[current]) ? (
                            <div className="relative w-full flex items-center justify-center">
                                <video
                                    className={videoClassName || "rounded-[8px] w-full max-h-[350px] object-contain shadow-lg"}
                                    src={items[current]}
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    style={{
                                        maxHeight: 350,
                                        width: "100%",
                                        maxWidth: 500,
                                        objectFit: "contain",
                                        backgroundColor: "transparent"
                                    }}
                                    onLoadStart={(e) => {
                                        e.target.style.visibility = 'visible';
                                    }}
                                />
                                <button
                                    className="absolute inset-0 flex items-center justify-center z-10"
                                    style={{ pointerEvents: "auto" }}
                                    onClick={onPlayVideo}
                                    aria-label="Play video"
                                >
                                    <span className="bg-white/90 rounded-full p-4 shadow-lg hover:bg-white transition">
                                        <svg width="48" height="48" fill="currentColor" viewBox="0 0 48 48">
                                            <path d="M16 10v28l22-14z" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        ) : (
                            <img
                                src={items[current]}
                                alt={`Screenshot ${current + 1}`}
                                className="rounded-[8px] w-full max-h-[350px] object-contain shadow-lg bg-white"
                            />
                        )}
                    </div>
                </div>
                <button
                    className="absolute right-2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition"
                    onClick={goNext}
                    aria-label="Next"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                >
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
            </div>
            <div className="flex gap-2 mt-3">
                {items.map((item, idx) => (
                    <button
                        key={idx}
                        className={`w-3 h-3 rounded-full border-2 ${current === idx ? "bg-[var(--theme-color)] border-[var(--theme-color)]" : "bg-white border-gray-300"} transition`}
                        onClick={() => setCurrent(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
            {/* Carousel animation */}
            <style>{`
                .animate-carousel-fade {
                    animation: carouselFade 0.5s;
                }
                @keyframes carouselFade {
                    from { opacity: 0; transform: scale(0.97);}
                    to { opacity: 1; transform: scale(1);}
                }
            `}</style>
        </div>
    );
}

function Projects() {
    const [openVideo, setOpenVideo] = useState(null);

    return (
        <div className="max-w-[1300px] w-full px-5 m-auto" id="projects">
            <div className="grid grid-rows-[auto,auto] h-auto max-w-[1200px] w-full overflow-hidden my-10 md:my-32 box-content gap-8 md:h-auto">
                {projects.map((project, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                        <div
                            key={project.name}
                            id={project.id} // <-- Add this line to set the id for anchor navigation
                            className={`flex flex-col md:flex-row ${!isEven ? "md:flex-row-reverse" : ""} md:items-center md:gap-8 mb-12`}
                        >
                            {/* Mobile layout */}
                            <div className="flex flex-col w-full md:hidden">
                                {/* Heading */}
                                <h1 className="text-[clamp(25px,2.5vw,48px)] font-[var(--max-weight)] text-[var(--dark-txt)] truncate mb-2">
                                    {project.name}
                                </h1>
                                {/* Media */}
                                <div className="w-full flex items-center justify-center mb-4">
                                    <Carousel
                                        items={project.screenshots}
                                        openIdx={0}
                                        onPlayVideo={() => setOpenVideo(idx)}
                                        videoClassName="rounded-[8px] w-full max-w-[500px] max-h-[350px] object-contain shadow-lg bg-black"
                                    />
                                </div>
                                {/* Description */}
                                <div className="text-[clamp(14px,1.1vw,20px)] text-[var(--light-txt)] overflow-hidden mb-4">
                                    {project.description}
                                </div>
                                {/* Skills */}
                                <img
                                    className="w-full h-[25px] object-contain inline mb-4"
                                    src={`https://skillicons.dev/icons?i=${project.technologies.join(",")}`}
                                    alt="Tech stack"
                                />
                                {/* Buttons */}
                                <div className="flex flex-row font-[var(--min-weight)] code-live-btn-container gap-3 flex-wrap mb-2">
                                    <a
                                        className="text-center bg-[var(--theme-color)] p-[10px] px-[15px] rounded-[4px] h-[45px] shadow-[0_3px_8px_rgba(0,0,0,0.6)] flex items-center gap-1"
                                        href={project.codeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="text-white text-[clamp(16px,1.1vw,20px)]">Code</span>
                                        {/* ...icon svg... */}
                                    </a>
                                    <a
                                        className="text-center bg-[var(--theme-color)] p-[10px] px-[15px] rounded-[4px] h-[45px] shadow-[0_3px_8px_rgba(0,0,0,0.6)] flex items-center gap-2"
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="text-white text-[clamp(16px,1.1vw,20px)]">Live</span>
                                        <div className="circle pulse green inline-block ml-2" style={{
                                            width: "12px",
                                            height: "12px",
                                            borderRadius: "50%",
                                            background: "#22c55e",
                                            boxShadow: "0 0 0 0 #22c55e",
                                            animation: "pulse 1.2s infinite"
                                        }}></div>
                                    </a>
                                </div>
                            </div>
                            {/* Desktop layout */}
                            <React.Fragment>
                                <div className="hidden md:flex flex-col h-full w-full px-3 project-desc justify-center md:w-1/2">
                                    <h1 className="md:max-w-[500px] md:w-full text-[clamp(25px,2.5vw,48px)] font-[var(--max-weight)] text-[var(--dark-txt)] truncate">
                                        {project.name}
                                    </h1>
                                    <div className="text-[clamp(14px,1.1vw,20px)] text-[var(--light-txt)] overflow-hidden my-5">
                                        {project.description}
                                    </div>
                                    <img
                                        className="w-full h-[25px] object-contain inline"
                                        src={`https://skillicons.dev/icons?i=${project.technologies.join(",")}`}
                                        alt="Tech stack"
                                    />
                                    <div className="flex flex-row font-[var(--min-weight)] mt-5 code-live-btn-container gap-3">
                                        <a
                                            className="mt-auto text-center bg-[var(--theme-color)] p-[10px] px-[15px] rounded-[4px] h-[45px] shadow-[0_3px_8px_rgba(0,0,0,0.6)] flex items-center gap-1"
                                            href={project.codeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className="text-white text-[clamp(16px,1.1vw,20px)]">Code</span>
                                            <svg className="inline ml-1" width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path d="M4.0744 2.9938C4.13263 1.96371 4.37869 1.51577 5.08432 1.15606C5.84357 0.768899 7.04106 0.949072 8.45014 1.66261C9.05706 1.97009 9.11886 1.97635 10.1825 1.83998C11.5963 1.65865 13.4164 1.65929 14.7213 1.84164C15.7081 1.97954 15.7729 1.97265 16.3813 1.66453C18.3814 0.651679 19.9605 0.71795 20.5323 1.8387C20.8177 2.39812 20.8707 3.84971 20.6494 5.04695C20.5267 5.71069 20.5397 5.79356 20.8353 6.22912C22.915 9.29385 21.4165 14.2616 17.8528 16.1155C17.5801 16.2574 17.3503 16.3452 17.163 16.4167C16.5879 16.6363 16.4133 16.703 16.6247 17.7138C16.7265 18.2 16.8491 19.4088 16.8973 20.4002C16.9844 22.1922 16.9831 22.2047 16.6688 22.5703C16.241 23.0676 15.6244 23.076 15.2066 22.5902C14.9341 22.2734 14.9075 22.1238 14.9075 20.9015C14.9075 19.0952 14.7095 17.8946 14.2417 16.8658C13.6854 15.6415 14.0978 15.185 15.37 14.9114C17.1383 14.531 18.5194 13.4397 19.2892 11.8146C20.0211 10.2698 20.1314 8.13501 18.8082 6.83668C18.4319 6.3895 18.4057 5.98446 18.6744 4.76309C18.7748 4.3066 18.859 3.71768 18.8615 3.45425C18.8653 3.03823 18.8274 2.97541 18.5719 2.97541C18.4102 2.97541 17.7924 3.21062 17.1992 3.49805L16.2524 3.95695C16.1663 3.99866 16.07 4.0147 15.975 4.0038C13.5675 3.72746 11.2799 3.72319 8.86062 4.00488C8.76526 4.01598 8.66853 3.99994 8.58215 3.95802L7.63585 3.49882C7.04259 3.21087 6.42482 2.97541 6.26317 2.97541C5.88941 2.97541 5.88379 3.25135 6.22447 4.89078C6.43258 5.89203 6.57262 6.11513 5.97101 6.91572C5.06925 8.11576 4.844 9.60592 5.32757 11.1716C5.93704 13.1446 7.4295 14.4775 9.52773 14.9222C10.7926 15.1903 11.1232 15.5401 10.6402 16.9905C10.26 18.1319 10.0196 18.4261 9.46707 18.4261C8.72365 18.4261 8.25796 17.7821 8.51424 17.1082C8.62712 16.8112 8.59354 16.7795 7.89711 16.5255C5.77117 15.7504 4.14514 14.0131 3.40172 11.7223C2.82711 9.95184 3.07994 7.64739 4.00175 6.25453C4.31561 5.78028 4.32047 5.74006 4.174 4.83217C4.09113 4.31822 4.04631 3.49103 4.0744 2.9938Z" fill="white"></path><path d="M3.33203 15.9454C3.02568 15.4859 2.40481 15.3617 1.94528 15.6681C1.48576 15.9744 1.36158 16.5953 1.66793 17.0548C1.8941 17.3941 2.16467 17.6728 2.39444 17.9025C2.4368 17.9449 2.47796 17.9858 2.51815 18.0257C2.71062 18.2169 2.88056 18.3857 3.05124 18.5861C3.42875 19.0292 3.80536 19.626 4.0194 20.6962C4.11474 21.1729 4.45739 21.4297 4.64725 21.5419C4.85315 21.6635 5.07812 21.7352 5.26325 21.7819C5.64196 21.8774 6.10169 21.927 6.53799 21.9559C7.01695 21.9877 7.53592 21.998 7.99999 22.0008C8.00033 22.5527 8.44791 23.0001 8.99998 23.0001C9.55227 23.0001 9.99998 22.5524 9.99998 22.0001V21.0001C9.99998 20.4478 9.55227 20.0001 8.99998 20.0001C8.90571 20.0001 8.80372 20.0004 8.69569 20.0008C8.10883 20.0026 7.34388 20.0049 6.67018 19.9603C6.34531 19.9388 6.07825 19.9083 5.88241 19.871C5.58083 18.6871 5.09362 17.8994 4.57373 17.2891C4.34391 17.0194 4.10593 16.7834 3.91236 16.5914C3.87612 16.5555 3.84144 16.5211 3.80865 16.4883C3.5853 16.265 3.4392 16.1062 3.33203 15.9454Z" fill="white"></path></svg>
                                        </a>
                                        <a
                                            className="mt-auto text-center bg-[var(--theme-color)] p-[10px] px-[15px] rounded-[4px] h-[45px] shadow-[0_3px_8px_rgba(0,0,0,0.6)] flex items-center gap-2"
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className="text-white text-[clamp(16px,1.1vw,20px)]">Live</span>
                                            <div className="circle pulse green inline-block ml-2" style={{
                                                width: "12px",
                                                height: "12px",
                                                borderRadius: "50%",
                                                background: "#22c55e",
                                                boxShadow: "0 0 0 0 #22c55e",
                                                animation: "pulse 1.2s infinite"
                                            }}></div>
                                        </a>
                                    </div>
                                </div>
                                <div className="hidden md:flex w-full md:w-1/2 items-center justify-center">
                                    <Carousel
                                        items={project.screenshots}
                                        openIdx={0}
                                        onPlayVideo={() => setOpenVideo(idx)}
                                        videoClassName="rounded-[8px] w-full max-w-[500px] max-h-[350px] object-contain shadow-lg bg-black"
                                    />
                                </div>
                            </React.Fragment>
                        </div>
                    );
                })}
            </div>

            {/* Video Dialog */}
            {openVideo !== null && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={() => setOpenVideo(null)}>
                    <div
                        className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 border border-gray-200 overflow-hidden"
                        style={{
                            animation: "fadeIn 0.2s",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.18)"
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl bg-white/90 rounded-full w-9 h-9 flex items-center justify-center shadow transition z-10"
                            onClick={() => setOpenVideo(null)}
                            aria-label="Close video"
                        >
                            <svg width="22" height="22" viewBox="0 0 20 20" fill="none"><path d="M6 6l8 8M6 14L14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                        </button>
                        <div className="flex flex-col items-center p-4 pt-10">
                            <iframe
                                src={projects[openVideo].video}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full rounded-lg shadow border border-gray-200"
                                style={{ maxHeight: "60vh", aspectRatio: "16/9", backgroundColor: "black", border: "none" }}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Pulse animation for live button */}
            <style>{`
                @keyframes pulse {
                    0% { box-shadow: 0 0 0 0 #22c55e; }
                    70% { box-shadow: 0 0 0 8px rgba(34,197,94,0); }
                    100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
                }
            `}</style>
            {/* FadeIn animation for dialog */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px);}
                    to { opacity: 1; transform: translateY(0);}
                }
            `}</style>
        </div>
    )
}

export default Projects