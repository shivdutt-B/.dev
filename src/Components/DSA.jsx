"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CalendarDays,
  Code2,
  Trophy,
  TrendingUp,
  Target,
  Zap,
  CheckCheck,
} from "lucide-react";
import BlurFade from "./magicui/blur-fade";

export function DSAStats() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.codolio.com/profile?userKey=CatFish"
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result.data);
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">
            Failed to load DSA stats: {error}
          </p>
        </CardContent>
      </Card>
    );
  }

  if (!data) return null;

  const leetcodeProfile = data.platformProfiles.platformProfiles.find(
    (p) => p.platform === "leetcode"
  );
  const gfgProfile = data.platformProfiles.platformProfiles.find(
    (p) => p.platform === "geeksforgeeks"
  );

  const totalQuestions =
    (leetcodeProfile?.totalQuestionStats.totalQuestionCounts || 0) +
    (gfgProfile?.totalQuestionStats.totalQuestionCounts || 0);

  const totalEasy =
    (leetcodeProfile?.totalQuestionStats.easyQuestionCounts || 0) +
    (gfgProfile?.totalQuestionStats.easyQuestionCounts || 0);

  const totalMedium =
    (leetcodeProfile?.totalQuestionStats.mediumQuestionCounts || 0) +
    (gfgProfile?.totalQuestionStats.mediumQuestionCounts || 0);

  const totalHard =
    (leetcodeProfile?.totalQuestionStats.hardQuestionCounts || 0) +
    (gfgProfile?.totalQuestionStats.hardQuestionCounts || 0);

  const fundamental = totalQuestions - (totalEasy + totalMedium + totalHard);

  // Combine topic distributions
  const combinedTopics = {};
  if (leetcodeProfile?.topicAnalysisStats.topicWiseDistribution) {
    Object.entries(
      leetcodeProfile.topicAnalysisStats.topicWiseDistribution
    ).forEach(([topic, count]) => {
      combinedTopics[topic] = (combinedTopics[topic] || 0) + count;
    });
  }
  if (gfgProfile?.topicAnalysisStats.topicWiseDistribution) {
    Object.entries(gfgProfile.topicAnalysisStats.topicWiseDistribution).forEach(
      ([topic, count]) => {
        combinedTopics[topic] = (combinedTopics[topic] || 0) + count;
      }
    );
  }

  const topTopics = Object.entries(combinedTopics)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 8);

  const maxStreak = Math.max(
    leetcodeProfile?.dailyActivityStatsResponse.maxStreak || 0,
    gfgProfile?.dailyActivityStatsResponse.maxStreak || 0
  );

  const platformUrls = {
    leetcode: "https://leetcode.com/u/shivdutt-B/",
    geeksforgeeks: "https://www.geeksforgeeks.org/user/shivdu9f79/",
  };

  return (
    <BlurFade>
    <div className="w-full my-10">
      <div className="font-calistoga text-gray-900 text-2xl mt-2 mb-2 flex flex-col gap-0 xxs:flex-row xxs:items-center xxs:justify-between">
        <div className="font-calistoga text-gray-900 text-md">DSA Stats</div>
        <div>
          <div className="flex items-end gap-1 text-blue-600 group cursor-pointer">
            <p className="text-gray-800">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="font-calistoga font-[100] text-sm underline transition-colors duration-300 group-hover:text-blue-700"
                href="https://codolio.com/profile/CatFish"
              >
                CatFish
              </a>
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-up-right size-5 text-blue-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Card className="border p-3 transition-shadow hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs font-medium">Problems</CardTitle>
            <Code2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">{totalQuestions}</div>
            <p className="text-xs text-muted-foreground truncate">All platforms</p>
          </CardContent>
        </Card>

        <Card className="border p-3 transition-shadow hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs font-medium truncate">Max Streak</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">{maxStreak}</div>
            <p className="text-xs text-muted-foreground truncate">Days</p>
          </CardContent>
        </Card>

        <Card className="border p-3 transition-shadow hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs font-medium truncate">Platforms</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">
              {data.platformProfiles.platformProfiles.length}
            </div>
            <p className="text-xs text-muted-foreground truncate">Active</p>
          </CardContent>
        </Card>

        <Card className="border p-3 transition-shadow hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs font-medium truncate">Languages</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">C++</div>
            <p className="text-xs text-muted-foreground">Primary</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border p-3 transition-shadow hover:shadow-md my-3">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <TrendingUp className="w-4 h-4 truncate" />
            Problem Difficulty
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-3">
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm">Fundamental</span>
              </div>
              <span className="text-sm font-medium">{fundamental}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm">Easy</span>
              </div>
              <span className="text-sm font-medium">{totalEasy}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span className="text-sm">Medium</span>
              </div>
              <span className="text-sm font-medium">{totalMedium}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-sm">Hard</span>
              </div>
              <span className="text-sm font-medium">{totalHard}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {data.platformProfiles.platformProfiles.map((profile) => (
          <Card
            key={profile.platform}
            className="border p-3 transition-shadow hover:shadow-md cursor-pointer"
            onClick={() =>
              window.open(platformUrls[profile.platform], "_blank")
            }
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Avatar className="w-8 h-8">
                  <AvatarImage
                    src={profile.userStats.titlePhoto || "/placeholder.svg"}
                    alt={profile.platform}
                  />
                  <AvatarFallback className="text-xs">
                    {profile.platform[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="capitalize truncate">{profile.platform}</span>
                <span className="text-muted-foreground font-normal flex items-center gap-1 truncate">
                  @{profile.userStats.handle}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground truncate">
                  Problems Solved
                </span>
                <span className="font-medium">
                  {profile.totalQuestionStats.totalQuestionCounts}
                </span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-muted-foreground truncate">
                  Max Streak
                </span>
                <span className="font-medium">
                  {profile.dailyActivityStatsResponse.maxStreak} days
                </span>
              </div>
              <div className="flex gap-1 flex-wrap">
                {profile.platform === "geeksforgeeks" && (
                  <Badge variant="secondary" className="text-xs">
                    F: {fundamental}
                  </Badge>
                )}
                <Badge variant="secondary" className="text-xs">
                  E: {profile.totalQuestionStats.easyQuestionCounts}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  M: {profile.totalQuestionStats.mediumQuestionCounts}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  H: {profile.totalQuestionStats.hardQuestionCounts}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border p-3 transition-shadow hover:shadow-md my-3">
        <CardHeader>
          <CardTitle className="text-base mb-3">Top Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-1">
            {topTopics.slice(0, 6).map(([topic, count]) => (
              <Badge key={topic} variant="outline" className="text-xs">
                {topic}: {count}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
    </BlurFade>
  );
}
