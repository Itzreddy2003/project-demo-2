import { useState } from "react";

const Dashboard = () => {
  // State to handle toggle for the smaller divs inside the first four larger divs
  const [toggleStates, setToggleStates] = useState({
    div1: true,
    div2: true,
    div1Placeholder: true,
    div2Placeholder: true,
    div1RowPlaceholder: true,
    div2RowPlaceholder: true,
    alert1Row1: true,
    alert1Row2: true,
    alert1Row3: true,
    alert2Row1: true,
    alert2Row2: true,
    alert2Row3: true,
  });

  // Handler to toggle the state
  const toggleHandler = (key) => {
    setToggleStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <div className="w-[90%] h-[100%] flex gap-5">
        <div className="w-[80%] h-[100%] rounded-3xl bg-gray-100">
          <div className="w-full flex flex-col justify-center items-center gap-10">
            {/* Header */}
            <div className="w-full flex justify-between items-center px-10 pt-5">
              <h1 className="text-2xl">Dashboard</h1>
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg">
                Add New Device +
              </button>
            </div>
            {/* Image Div */}
            <div className="w-[85%] h-[250px] bg-gray-200 rounded-3xl"></div>
            {/* Device List */}
            <div className="w-full flex justify-around gap-2 px-2">
              {/* First 4 Divs with Toggle */}
              {["div1", "div2"].map((divKey, index) => (
                <div
                  key={index}
                  className="w-1/4  bg-gray-200 rounded-xl p-2 flex flex-col gap-2"
                >
                  {/* First Row with Status and Toggle */}
                  <div className="flex justify-between items-center bg-gray-300 rounded-xl w-full h-1/2 px-2">
                    <span
                      className={`text-lg font-semibold ${
                        toggleStates[divKey] ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {toggleStates[divKey] ? "SAFE" : "DANGER"}
                    </span>
                    <div
                      className={`relative w-12 h-6 rounded-full cursor-pointer transition-all ${
                        toggleStates[divKey] ? "bg-green-500" : "bg-red-500"
                      }`}
                      onClick={() => toggleHandler(divKey)}
                    >
                      <div
                        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                          toggleStates[divKey] ? "transform translate-x-6" : ""
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* First Placeholder Row with Toggle */}
                  <div
                    className="w-full h-1/2 flex justify-between items-center p-2 bg-gray-300 rounded-xl"
                    onClick={() => toggleHandler(`${divKey}RowPlaceholder`)}
                  >
                    <span
                      className={`text-lg font-semibold ${
                        toggleStates[`${divKey}RowPlaceholder`] ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {toggleStates[`${divKey}RowPlaceholder`] ? "SAFE" : "DANGER"}
                    </span>
                    <div
                      className={`relative w-12 h-6 rounded-full cursor-pointer transition-all ${
                        toggleStates[`${divKey}RowPlaceholder`] ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                          toggleStates[`${divKey}RowPlaceholder`] ? "transform translate-x-6" : ""
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Fifth Div with Toggle buttons */}
              {["alert1", "alert2"].map((alertKey, index) => (
                <div key={index} className="alert w-1/4  bg-gray-200 rounded-xl p-2 flex flex-col gap-2">
                  {/* First Row with Toggle */}
                  <div
                    className="w-full h-1/3 flex justify-between items-center p-2 bg-gray-300 rounded-xl"
                    onClick={() => toggleHandler(`${alertKey}Row1`)}
                  >
                    <span
                      className={`text-lg font-semibold ${
                        toggleStates[`${alertKey}Row1`] ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {toggleStates[`${alertKey}Row1`] ? "SAFE" : "DANGER"}
                    </span>
                    <div
                      className={`relative w-12 h-6 rounded-full cursor-pointer transition-all ${
                        toggleStates[`${alertKey}Row1`] ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                          toggleStates[`${alertKey}Row1`] ? "transform translate-x-6" : ""
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* Second Row with Toggle */}
                  <div
                    className="w-full h-1/3 flex justify-between items-center p-2 bg-gray-300 rounded-xl"
                    onClick={() => toggleHandler(`${alertKey}Row2`)}
                  >
                    <span
                      className={`text-lg font-semibold ${
                        toggleStates[`${alertKey}Row2`] ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {toggleStates[`${alertKey}Row2`] ? "SAFE" : "DANGER"}
                    </span>
                    <div
                      className={`relative w-12 h-6 rounded-full cursor-pointer transition-all ${
                        toggleStates[`${alertKey}Row2`] ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                          toggleStates[`${alertKey}Row2`] ? "transform translate-x-6" : ""
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* Third Row with Toggle */}
                  <div
                    className="w-full h-1/3 flex justify-between items-center p-2 bg-gray-300 rounded-xl"
                    onClick={() => toggleHandler(`${alertKey}Row3`)}
                  >
                    <span
                      className={`text-lg font-semibold ${
                        toggleStates[`${alertKey}Row3`] ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {toggleStates[`${alertKey}Row3`] ? "SAFE" : "DANGER"}
                    </span>
                    <div
                      className={`relative w-12 h-6 rounded-full cursor-pointer transition-all ${
                        toggleStates[`${alertKey}Row3`] ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                          toggleStates[`${alertKey}Row3`] ? "transform translate-x-6" : ""
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-[20%] h-full flex flex-col gap-4 items-center justify-between">
          <div className="w-full h-1/2 flex flex-col gap-4 items-center">
            <h1 className="text-xl font-semibold">Status</h1>
            <div className="status w-[10rem] h-[10rem] rounded-xl flex justify-center items-center relative">
              {/* Glow Effect */}
              <div className="absolute w-[12rem] h-[12rem] rounded-full blur-xl opacity-30 animate-pulse"></div>

              {/* Spinning Loader */}
              <div className="w-[90%] h-[90%] rounded-full border-8 border-t-green-500 border-transparent animate-spin shadow-[0_0_20px_10px_rgba(34,197,94,0.6)]"></div>
              {/* Centered Text */}
              <p className="absolute text-xl font-semibold text-green-500">
                SAFE
              </p>
            </div>
          </div>

          {/* Placeholder Section */}
          <div className="w-full h-1/2 bg-gray-200 rounded-xl p-2 flex flex-col gap-2 items-center">
            <div className="w-full h-1/4 bg-gray-300 rounded-xl"></div>
            <div className="w-full h-1/4 bg-gray-300 rounded-xl"></div>
            <div className="w-full h-1/4 bg-gray-300 rounded-xl"></div>
            {/* <div className="w-full h-1/4 bg-gray-300 rounded-xl"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
