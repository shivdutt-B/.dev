import { useState, useEffect } from 'react';

const useLeetCodeData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const username = "shivdutt-B"; // Hardcoded username
    const query = `
      query getUserProfile($username: String!) {
        allQuestionsCount {
          difficulty
          count
        }
        matchedUser(username: $username) {
          contributions {
            points
          }
          profile {
            reputation
            ranking
          }
          submissionCalendar
          submitStats {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
            totalSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
        recentSubmissionList(username: $username) {
          title
          titleSlug
          timestamp
          statusDisplay
          lang
          __typename
        }
      }
    `;

    const formatData = (data) => ({
      totalSolved: data.matchedUser.submitStats.acSubmissionNum[0].count,
      totalSubmissions: data.matchedUser.submitStats.totalSubmissionNum,
      totalQuestions: data.allQuestionsCount[0].count,
      easySolved: data.matchedUser.submitStats.acSubmissionNum[1].count,
      totalEasy: data.allQuestionsCount[1].count,
      mediumSolved: data.matchedUser.submitStats.acSubmissionNum[2].count,
      totalMedium: data.allQuestionsCount[2].count,
      hardSolved: data.matchedUser.submitStats.acSubmissionNum[3].count,
      totalHard: data.allQuestionsCount[3].count,
      ranking: data.matchedUser.profile.ranking,
      contributionPoint: data.matchedUser.contributions.points,
      reputation: data.matchedUser.profile.reputation,
      submissionCalendar: JSON.parse(data.matchedUser.submissionCalendar),
      recentSubmissions: data.recentSubmissionList,
    });

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const fetchLeetCodeData = async () => {
          try {
            const response = await fetch('http://localhost:5000/proxy', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ query, variables: { username: "shivdutt-B" } }),
            });
        
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        

        if (result.errors) {
          throw new Error(result.errors[0].message);
        }

        setData(formatData(result.data));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};

export default useLeetCodeData;
