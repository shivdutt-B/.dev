import React from "react";

const DSA = () => {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      maxWidth: "1200px",
      margin: "0rem auto",
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      borderRadius: "16px",
      overflow: "hidden",
      background: "#fff"
    }}>
      {/* Top overlay to hide navbar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "60px", // Adjust height as needed
          background: "#fff",
          zIndex: 2,
        }}
      />
      {/* Bottom overlay to hide footer */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "180px", // Adjust height as needed
          background: "#fff",
          zIndex: 2,
        }}
      />
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
