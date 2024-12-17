import React, { useState, useEffect } from "react";
import axios from "axios";

const GFGProfile = () => {
  const [profileData, setProfileData] = useState(null); // To store fetched data
  const [loading, setLoading] = useState(true); // To show loading state
  const [error, setError] = useState(null); // To handle errors

  // Replace this with the actual API

  // Render different states

  return (
    <div className="iframe-gutter">
      <div className="iframe-container">
        <iframe
          src="https://codolio.com/profile/Pzipegasus"
          className="iframe-content"
          // scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default GFGProfile;
