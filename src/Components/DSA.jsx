import React, { useState, useEffect } from "react";

const overlayStyle = {
  position: "absolute",
  background: "#fff",
  zIndex: 2,
};

const DSA = () => {
  // Show left overlay only for screens >= 768px
  const [showLeftOverlay, setShowLeftOverlay] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setShowLeftOverlay(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1200px",
        margin: "0rem auto",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        borderRadius: "16px",
        overflow: "hidden",
        background: "#fff",
      }}
    >
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
        style={{
          width: "100%",
          height: "142vh",
          minHeight: "400px",
          border: "none",
          outline: "none",
          display: "block",
          position: "relative",
          zIndex: 1,
        }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default DSA;
