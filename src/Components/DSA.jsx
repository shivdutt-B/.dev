import React from "react";
import LeetCode from "../assets/peripherals/leetcode.png";

function DSA() {
  return (
    <div className="max-w-[1200px] w-[100%] m-auto">
      <div className="container h-[210px] flex ">
        <div className="leet-code-dashboard p-3 w-[100%] justify-center gap-20 mr-4 flex flex-wrap rounded-md bg-[#F6FB7A] ">
          <div class="grad1 relative">
            <img
              src={LeetCode}
              alt=""
              className="absolute z-50 bg-white top-8 bg-transparent w-7 h-7"
            />
            <div class="grad-mid bg-[#F6FB7A] flex items-center justify-between flex-col relative">
              <div className="group cursor-pointer">
                {/* Default state */}
                {/* <div className="block group-hover:hidden solved-lc"> */}
                  <div className="default-state">
                  <div>
                    <span className="text-4xl font-bold">29</span>/3380
                  </div>
                  <div className="text-sm text-center">&#x2714; Solved</div>
                </div>

                {/* Hover state */}
                {/* <div className="hidden group-hover:block accept-lc"> */}
                <div className="hover-state">
                  <div>
                    <span className="text-4xl font-bold">53.45</span>
                  </div>
                  <div className="text-sm text-center">Acceptance</div>
                </div>
              </div>

              <div className="absolute bottom-3 text-[13px] ">
                <span className="font-semibold">1029</span> submission
              </div>
            </div>
            <div class="soft-radius1 sr"></div>
            <div class="soft-radius2 sr"></div>
            <div class="soft-radius3 sr"></div>
            <div class="soft-radius4 sr"></div>
            <div class="soft-radius5 sr"></div>
            <div class="soft-radius6 sr"></div>
          </div>
          <div className="flex flex-col gap-3 font-semibold items-end justify-evenly h-full">
            <div className="w-[100px] border rounded-md flex items-center flex-col bg-[#FFFAB7]">
              <div className="text-[#229595]">Easy</div>
              <div className="text-[14px]">23/32</div>
            </div>
            <div className="w-[100px] border rounded-md flex items-center flex-col bg-[#FFFAB7]">
              <div className="text-[#ebaa05]">Med.</div>
              <div className="text-[14px]">23/42</div>
            </div>
            <div className="w-[100px] border rounded-md flex items-center flex-col bg-[#FFFAB7]">
              <div className="text-[#ce3535]">Hard</div>
              <div className="text-[14px]">23/42</div>
            </div>
          </div>
        </div>

        <div className="w-[100%] mr-4 flex flex-wrap">
          <div className="flex-grow border-green-900 border-2 m-2">grid 1</div>
          <div className="flex-grow-0 border-blue-900 border-2 m-2">
            grid 1 lorem19
          </div>
        </div>
      </div>
    </div>
  );
}

export default DSA;
