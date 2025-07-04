import React, { useState, useEffect, useRef } from "react";

const overlayStyle = {
  position: "absolute",
  background: "#fff",
  zIndex: 2,
  pointerEvents: "none", // overlays won't block interactions
};

const DSA = () => {
  // Show left overlay only for screens >= 768px
  const [showLeftOverlay, setShowLeftOverlay] = useState(window.innerWidth >= 768);
  const [iframeHeight, setIframeHeight] = useState(getIframeHeight());
  const containerRef = useRef(null);

  function getIframeHeight() {
    // Responsive height: 80vh for mobile, 142vh for desktop
    return window.innerWidth < 768 ? "80vh" : "142vh";
  }

  useEffect(() => {
    const handleResize = () => {
      setShowLeftOverlay(window.innerWidth >= 768);
      setIframeHeight(getIframeHeight());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive styles for container
  const containerStyle = {
    position: "relative",
    width: "100%",
    maxWidth: "1200px",
    margin: "0rem auto",
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    borderRadius: "16px",
    overflow: "hidden",
    background: "#fff",
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
  };

  // Responsive iframe style
  const iframeStyle = {
    width: "100%",
    height: iframeHeight,
    minHeight: "300px",
    border: "none",
    outline: "none",
    display: "block",
    position: "relative",
    zIndex: 1,
    background: "#fff",
    boxSizing: "border-box",
  };

  return (
    <div style={containerStyle} ref={containerRef}>
      {/* Top overlay to hide navbar */}
      <div
        style={{
          ...overlayStyle,
          top: 0,
          left: 0,
          width: "100%",
          height: "60px",
        }}
      />
      {/* Bottom overlay to hide footer */}
      <div
        style={{
          ...overlayStyle,
          bottom: 0,
          left: 0,
          width: "100%",
          height: "180px",
        }}
      />
      {/* Left overlay (only for screens >= 768px) */}
      {showLeftOverlay && (
        <div
          style={{
            ...overlayStyle,
            top: 0,
            left: 0,
            width: "55px",
            height: "100%",
          }}
        />
      )}
      <iframe
        src="https://codolio.com/profile/CatFish"
        title="Codolio Profile"
        style={iframeStyle}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default DSA;
