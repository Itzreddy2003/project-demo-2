const Floor1 = () => {
  return (
    <>
      <div className="w-[90%] h-[100%] flex gap-5">
        <div className="w-[80%] h-[100%] rounded-3xl bg-gray-100">
          <div className="w-full flex flex-col justify-center items-center gap-10">
            {/* Header */}
            <div className="w-full flex justify-between items-center px-10 pt-5">
              <h1 className="text-2xl">1</h1>
            </div>
            {/* Image Div */}
            <div className="w-[75%] h-[300px] bg-gray-200 rounded-3xl"></div>
            {/* Device List */}
            <div className="w-full flex justify-around gap-2 px-2">
              <div className="w-1/4  bg-gray-200 rounded-xl p-2 flex flex-col gap-2">
                {/* First Row with Status and Toggle */}

                {/* First Placeholder Row with Toggle */}
              </div>

              {/* Fifth Div with Toggle buttons */}

              <div className="alert w-1/4 h-[150px]  bg-gray-200 rounded-xl p-2 flex flex-col gap-2">
                {/* First Row with Toggle */}
              </div>
              <div className="alert w-1/4 h-[150px]  bg-gray-200 rounded-xl p-2 flex flex-col gap-2">
                {/* First Row with Toggle */}
              </div>
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
            <div className="w-full h-1/4 bg-gray-300 rounded-xl"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Floor1;
