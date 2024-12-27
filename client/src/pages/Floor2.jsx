import { useState, useEffect } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi"; // Importing icons
import screenshot2 from "../assets/screenshot2.png";
import SegmentedCircleBar from "../component/SegmentedCircleBar";

const Floor2 = () => {
  const [isServer1Open, setIsServer1Open] = useState(false);
  const [isServer2Open, setIsServer2Open] = useState(false);

  // Adding state for 12 devices and their statuses
  const [deviceStatuses, setDeviceStatuses] = useState(
    Array(12).fill("safe") // Initialize all devices as "safe"
  );

  // Device data to display identifiers
  const deviceData = [
    "VAV-10",
    "VAV-11",
    "VAV-12",
    "VAV-13",
    "VAV-14",
    "VAV-15",
    "VAV-16",
    "VAV-17",
    "VAV-18",
    "VAV-19",
    "VAV-20",
    "VAV-21",
  ];

  const toggleServer1 = () => setIsServer1Open((prev) => !prev);
  const toggleServer2 = () => setIsServer2Open((prev) => !prev);

  // Function to toggle device status
  const toggleDeviceStatus = (index) => {
    setDeviceStatuses((prevStatuses) =>
      prevStatuses.map((status, i) =>
        i === index ? (status === "safe" ? "danger" : "safe") : status
      )
    );
  };

  useEffect(() => {
    // Function to randomly toggle 5 or 6 devices' statuses
    const toggleRandomDevices = () => {
      const devicesToToggle = new Set();
      while (devicesToToggle.size < 5) { // Change the number to 6 if you want 6 devices to change
        const randomIndex = Math.floor(Math.random() * 12);
        devicesToToggle.add(randomIndex);
      }

      setDeviceStatuses((prevStatuses) =>
        prevStatuses.map((status, index) =>
          devicesToToggle.has(index) ? (status === "safe" ? "danger" : "safe") : status
        )
      );
    };

    // Call toggleRandomDevices every 5 seconds
    const interval = setInterval(toggleRandomDevices, 5000);

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div className="w-[90%] h-[100%] flex gap-5">
      <div className="w-[80%] h-[100%] rounded-3xl bg-gray-100">
        <div className="w-full flex flex-col justify-center items-center gap-10">
          {/* Header */}

          {/* Image Div */}
          <div className="h-[400px] w-full bg-gray-200 rounded-3xl">
            <img
              src={screenshot2}
              alt="Picture 1"
              className="w-full h-full object-fit rounded-3xl"
            />
          </div>
          {/* Device List */}
          <div className="w-full flex justify-around gap-2 px-2">
            {Array(4)
              .fill(0)
              .map((_, colIndex) => (
                <div
                  key={colIndex}
                  className="alert w-1/4 h-[150px] bg-gray-200 rounded-xl p-2 flex flex-col gap-2"
                >
                  {Array(3)
                    .fill(0)
                    .map((_, rowIndex) => {
                      const deviceIndex = colIndex * 3 + rowIndex;
                      return (
                        <div
                          key={rowIndex}
                          className={`w-full h-[50px] rounded-xl cursor-pointer flex justify-center items-center ${
                            deviceStatuses[deviceIndex] === "safe"
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                          onClick={() => toggleDeviceStatus(deviceIndex)}
                        >
                          <span className="text-white font-bold">
                            {deviceData[deviceIndex]}
                          </span>
                        </div>
                      );
                    })}
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-[20%] h-full flex flex-col gap-4 items-center">
        <div className="w-full h-1/2 flex flex-col gap-4 items-center">
          <h1 className="text-xl font-semibold">Status</h1>

          <SegmentedCircleBar />
        </div>

        {/* Server Dropdowns */}
        <div className="w-full bg-gray-200 rounded-xl p-2 flex flex-col gap-2 items-center">
          {/* Server 1 Dropdown */}
          <div className="w-full bg-gray-300 rounded-xl">
            <div
              className="flex justify-between items-center cursor-pointer px-4 py-2"
              onClick={toggleServer1}
            >
              <h1 className="font-semibold">Server 1</h1>
              {isServer1Open ? (
                <HiChevronUp size={20} />
              ) : (
                <HiChevronDown size={20} />
              )}
            </div>
            {isServer1Open && (
              <div className="flex flex-col gap-2 p-2 max-h-[100px] overflow-y-auto scrollbar-none">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div
                    key={index}
                    className="w-full h-[80px] bg-gray-400 rounded-xl flex justify-center items-center"
                  >
                    <h1>VAV-{index + 10}</h1>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Server 2 Dropdown */}
          <div className="w-full bg-gray-300 rounded-xl">
            <div
              className="flex justify-between items-center cursor-pointer px-4 py-2"
              onClick={toggleServer2}
            >
              <h1 className="font-semibold">Server 2</h1>
              {isServer2Open ? (
                <HiChevronUp size={20} />
              ) : (
                <HiChevronDown size={20} />
              )}
            </div>
            {isServer2Open && (
              <div className="flex flex-col gap-2 p-2 max-h-[150px] overflow-y-auto scrollbar-none">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div
                    key={index}
                    className="w-full h-[80px] bg-gray-400 rounded-xl flex justify-center items-center"
                  >
                    <h1>VAV-{index + 20}</h1>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Floor2;
