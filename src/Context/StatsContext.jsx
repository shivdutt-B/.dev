import React, { createContext, useState, useEffect } from "react";

// Create the context
export const StatsContext = createContext();

// Provide the context
export const StatsContextData = ({ children }) => {
  const [stats, setStats] = useState({
    easySolved: 0,
    totalEasy: 0,
    mediumSolved: 0,
    totalMedium: 0,
    hardSolved: 0,
    totalHard: 0,
    totalSolved: 0,
    totalQuestions: 0,
    submissions: 0,
    percentSolved: 0,
  });
  const [loading, setLoading] = useState(false);

  // Fetching leetcode data
  async function fetchDSA() {
    setLoading(true);
    const res = await fetch(
      "https://leetcode-api-faisalshohag.vercel.app/shivdutt-B"
    );
    const data = await res.json();
    setStats((prevStats) => ({
      ...prevStats,
      easySolved: data.easySolved,
      totalEasy: data.totalEasy,
      mediumSolved: data.mediumSolved,
      totalMedium: data.totalMedium,
      hardSolved: data.hardSolved,
      totalHard: data.totalHard,
      totalSolved: data.totalSolved,
      totalQuestions: data.totalQuestions,
      submissions: data.totalSubmissions[0].submissions,
      percentSolved: ((data.totalSolved / data.totalQuestions) * 100).toFixed(
        2
      )
    }));
    setLoading(false);
  }

  useEffect(() => {
    fetchDSA();
  }, []);

  return (
    <StatsContext.Provider value={{ stats, setStats, loading, setLoading }}>
      {children}
    </StatsContext.Provider>
  );
};
