import React from "react";

function DSA() {
  return (
    <div>
      <div className="container h-[300px] flex border-red-900 border-2 p-4">
        <div className="w-[100%] mr-4 flex flex-wrap">
          <div className="flex-grow border-green-900 border-2 m-2">
            <div className="w-full bg-gray-200 h-2.5 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
          <div className="flex-grow-0 border-blue-900 border-2 m-2">
            grid 1 lorem19
          </div>
        </div>

        <div className="w-[100%] mr-4 flex flex-wrap">
          <div className="flex-grow border-green-900 border-2 m-2">grid 1</div>
          <div className="flex-grow-0 border-blue-900 border-2 m-2">
            grid 1 lorem19
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center">
        <div class="relative w-36 h-36">
          <div class="absolute inset-0 rounded-full bg-gray-200"></div>
          <div class="absolute inset-0 rounded-full bg-green-500 w-[85%]"></div>
          <div class="absolute inset-0 rounded-full border-4 border-gray-300"></div>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold">
            <span class="text-gray-800">29</span>
            <span class="text-gray-400">/3389</span>
          </div>
        </div>
        <div class="ml-4 text-gray-500 font-medium">Solved</div>
      </div>
    </div>
  );
}

export default DSA;
