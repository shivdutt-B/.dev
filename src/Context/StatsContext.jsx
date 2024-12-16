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
    hardSolved:0,
    totalHard: 0,
    totalSolved:0,
    totalQuestions: 0,
  });

  // Fetching leetcode data
  async function fetchDSA() {
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
      // contributionPoint: data.contributionPoint || prevStats.contributionPoint,
      // ranking: data.ranking || prevStats.ranking,
      // reputation: data.reputation || prevStats.reputation,
    }));
    console.log(data);
  }

  useEffect(() => {
    fetchDSA();
  }, []);

  return (
    <StatsContext.Provider value={{}}>{children}</StatsContext.Provider>
  );
};
