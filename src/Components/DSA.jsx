import React, { useState, useEffect, useContext } from "react";
import LeetCode from "../assets/peripherals/leetcode.png";
import GFG from "../assets/peripherals/gfg.png";
import { StatsContext } from "../Context/StatsContext";

function DSA() {
  const statsContext = useContext(StatsContext);

  if (statsContext.loading) return <div>Loading...</div>;
  return (
    <>
      {/* {statsContext.loading ? ( */}
      <div className="max-w-[1200px] w-[100%] m-auto">
        <div className="container h-[210px] flex">
          <div className="leet-code-dashboard p-3 w-[100%] justify-center gap-20 mr-4 flex flex-wrap rounded-md bg-[#F6FB7A]">
            <div className="grad1 relative">
              <img
                src={LeetCode}
                alt=""
                className="absolute z-50 top-8 bg-transparent w-7 h-7"
              />
              <div className="grad-mid bg-[#F6FB7A] flex items-center justify-between flex-col relative">
                <div className="group cursor-pointer">
                  <div className="default-state">
                    <div>
                      {/* Display total solved and total questions dynamically */}
                      <span className="text-4xl font-bold">
                        {statsContext.stats.totalSolved}
                      </span>
                      /{statsContext.stats.totalQuestions}
                    </div>
                    <div className="text-sm text-center">&#x2714; Solved</div>
                  </div>

                  <div className="hover-state">
                    <div>
                      {/* Assuming 50% acceptance rate for simplicity, you can replace it with actual data */}
                      <span className="text-4xl font-bold">
                        {statsContext.stats.percentSolved}%
                      </span>
                    </div>
                    <div className="text-sm text-center">&#x2714; Done</div>
                  </div>
                </div>

                <div className="absolute bottom-3 text-[13px]">
                  <span className="font-semibold">
                    {statsContext.stats.submissions}
                  </span>{" "}
                  submission
                </div>
              </div>
              <div className="soft-radius1 sr"></div>
              <div className="soft-radius2 sr"></div>
              <div className="soft-radius3 sr"></div>
              <div className="soft-radius4 sr"></div>
              <div className="soft-radius5 sr"></div>
              <div className="soft-radius6 sr"></div>
            </div>
            <div className="flex flex-col gap-3 font-semibold items-end justify-evenly h-full">
              <div className="w-[100px] border rounded-md flex items-center flex-col bg-[#FFFAB7]">
                <div className="text-[#229595]">Easy</div>
                {/* Display solved/easy questions dynamically */}
                <div className="text-[14px]">
                  {statsContext.stats.easySolved}/{statsContext.stats.totalEasy}
                </div>
              </div>
              <div className="w-[100px] border rounded-md flex items-center flex-col bg-[#FFFAB7]">
                <div className="text-[#ebaa05]">Med.</div>
                {/* Display solved/medium questions dynamically */}
                <div className="text-[14px]">
                  {statsContext.stats.mediumSolved}/
                  {statsContext.stats.totalMedium}
                </div>
              </div>
              <div className="w-[100px] border rounded-md flex items-center flex-col bg-[#FFFAB7]">
                <div className="text-[#ce3535]">Hard</div>
                {/* Display solved/hard questions dynamically */}
                <div className="text-[14px]">
                  {statsContext.stats.hardSolved}/{statsContext.stats.totalHard}
                </div>
              </div>
            </div>
          </div>

          <div className="leet-code-dashboard p-3 w-[100%] justify-center gap-20 mr-4 flex flex-wrap rounded-md bg-[#88D66C]">
            <div className="grad1 relative">
              <img
                src={GFG}
                alt=""
                className="absolute z-50 top-8 bg-transparent w-7 h-7"
              />
              <div className="grad-mid bg-[#88D66C] flex items-center justify-between flex-col relative">
                <div className="group cursor-pointer">
                  <div className="default-state">
                    <div>
                      {/* Display total solved and total questions dynamically */}
                      <span className="text-4xl font-bold">
                        {statsContext.stats.totalSolved}
                      </span>
                      /{statsContext.stats.totalQuestions}
                    </div>
                    <div className="text-sm text-center">&#x2714; Solved</div>
                  </div>

                  <div className="hover-state">
                    <div>
                      {/* Assuming 50% acceptance rate for simplicity, you can replace it with actual data */}
                      <span className="text-4xl font-bold">
                        {statsContext.stats.percentSolved}%
                      </span>
                    </div>
                    <div className="text-sm text-center">&#x2714; Done</div>
                  </div>
                </div>

                <div className="absolute bottom-3 text-[13px]">
                  <span className="font-semibold">
                    {statsContext.stats.submissions}
                  </span>{" "}
                  submission
                </div>
              </div>
              <div className="soft-radius1 sr"></div>
              <div className="soft-radius2 sr"></div>
              <div className="soft-radius3 sr"></div>
              <div className="soft-radius4 sr"></div>
              <div className="soft-radius5 sr"></div>
              <div className="soft-radius6 sr"></div>
            </div>
            <div className="flex flex-col gap-3 font-semibold items-end justify-evenly h-full">
              <div className="w-[100px] border rounded-md flex items-center flex-col bg-[#B6FFA1]">
                <div className="text-[#229595]">Easy</div>
                {/* Display solved/easy questions dynamically */}
                <div className="text-[14px]">
                  {statsContext.stats.easySolved}/{statsContext.stats.totalEasy}
                </div>
              </div>
              <div className="w-[100px] border rounded-md flex items-center flex-col bg-[#B6FFA1]">
                <div className="text-[#ebaa05]">Med.</div>
                {/* Display solved/medium questions dynamically */}
                <div className="text-[14px]">
                  {statsContext.stats.mediumSolved}/
                  {statsContext.stats.totalMedium}
                </div>
              </div>
              <div className="w-[100px] border rounded-md flex items-center flex-col bg-[#B6FFA1]">
                <div className="text-[#ce3535]">Hard</div>
                {/* Display solved/hard questions dynamically */}
                <div className="text-[14px]">
                  {statsContext.stats.hardSolved}/{statsContext.stats.totalHard}
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
      {/* ) : (
        <>LOADING</>
      )} */}
    </>
  );
}

export default DSA;
