import { useState, useEffect } from "react";
import SegmentedCircleBar from "../component/SegmentedCircleBar";

const Dashboard = () => {
  const items = [
    { id: 1, text: "ELECTRICAL ROOM" },
    { id: 2, text: "UPS ROOM" },
    { id: 3, text: "ELECTRICAL ROOM" },
    { id: 4, text: "UPS ROOM" },
    { id: 5, text: "11F-AHU1" },
    { id: 6, text: "11F-AHU2" },
    { id: 7, text: "12F-AHU1" },
    { id: 8, text: "12F-AHU2" },
  ];

  const initialStatus = items.reduce((acc, item) => {
    acc[item.id] = Math.random() > 0.5;
    return acc;
  }, {});

  const [toggleStates, setToggleStates] = useState(initialStatus);

  const toggleHandler = (id) => {
    setToggleStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Function to change the status of all items randomly every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setToggleStates((prev) => {
        const newStates = { ...prev };
        Object.keys(newStates).forEach((key) => {
          newStates[key] = Math.random() > 0.5; // Toggle the state randomly
        });
        return newStates;
      });
    }, 5000); // Change state every 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const randomValue = () => Math.floor(Math.random() * 100);

  const data = [
    {
      id: 1,
      title: "EX-FAN",
      labels: ["PANTRY", "BATTERY RM"],
    },
    {
      id: 2,
      title: "ENERGY METER KW",
      labels: ["11F", "12F"],
    },
  ];

  const alerts = [
    {
      timestamp: "12:30pm, 12/12/24",
      floor: "3",
      server: "AIL_765_UL",
      component: "AIU_258_0AS",
      value: "30",
    },
    {
      timestamp: "1:45pm, 12/12/24",
      floor: "5",
      server: "AIL_898_KL",
      component: "AIU_784_PQZ",
      value: "40",
    },
    {
      timestamp: "3:15pm, 12/12/24",
      floor: "1",
      server: "AIL_432_AB",
      component: "AIU_125_XYZ",
      value: "35",
    },
  ];

  return (
    <>
      <div className="w-[95%] h-[100%] flex gap-3">
        <div className="w-[80%] h-[100%] rounded-3xl bg-gray-100">
          <div className="w-full flex flex-col justify-center items-center gap-5">
            <div className="w-full flex justify-between items-center px-10 pt-5">
              <h1 className="text-2xl">Dashboard</h1>
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg">
                Add New Floor +
              </button>
            </div>
            <div className="w-full flex justify-around gap-2 ">
              <div className="w-auto bg-gray-200 rounded-xl px-3 py-2 flex flex-col gap-3">
                <h2 className="text-center text-xl p-2 px-3 font-semibold text-gray-700 bg-gray-300 py-2 rounded-lg">
                  BREAKER’s MAIN I/C STATUS
                </h2>
                {items.slice(0, 4).map((item) => (
                  <div
                    key={item.id}
                    className={`w-full flex justify-between items-center p-2 rounded-xl cursor-pointer ${toggleStates[item.id]
                        ? "bg-green-500"
                        : "bg-red-500"
                      }`}
                    onClick={() => toggleHandler(item.id)}
                  >
                    <span className="text-white font-semibold">
                      {item.text}
                    </span>
                    <span className="text-lg font-semibold mr-3">
                      {toggleStates[item.id] ? "SAFE" : "DANGER"}
                    </span>
                  </div>
                ))}
              </div>

              <div className="w-1/4 bg-gray-200 rounded-xl px-3 py-2 flex flex-col gap-3">
                <h2 className="text-center text-xl font-semibold text-gray-700 bg-gray-300 py-2 rounded-lg">
                  AHU FAULT STATUS
                </h2>
                {items.slice(4).map((item) => (
                  <div
                    key={item.id}
                    className={`w-full flex justify-between items-center p-2 rounded-xl cursor-pointer ${toggleStates[item.id]
                        ? "bg-green-500"
                        : "bg-red-500"
                      }`}
                    onClick={() => toggleHandler(item.id)}
                  >
                    <span className="text-white font-semibold">
                      {item.text}
                    </span>
                    <span className="text-lg font-semibold mr-3">
                      {toggleStates[item.id] ? "SAFE" : "DANGER"}
                    </span>
                  </div>
                ))}
              </div>

              <div className="w-auto bg-gray-200 rounded-xl px-3 py-2 flex flex-col gap-2">
                <h2 className="text-center text-xl px-3 font-semibold text-black opacity-75 bg-gray-300 py-2 rounded-lg">
                  CRITICAL ROOMS (T & RH)
                </h2>
                {[{ label: "UPS ROOM" }, { label: "BATT ROOM" }, { label: "HUB ROOM" }, { label: "SER ROOM" }].map(
                  (room, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-green-500 p-2 rounded-lg"
                    >
                      <span className="text-white font-semibold">{room.label}</span>
                      <div className="w-[50px] h-[30px] bg-black text-white flex items-center justify-center rounded-lg">
                        {randomValue()}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="w-auto rounded-xl px-3 py-4 flex flex-row gap-40 mt-5 mx-6">
            {data.map((section) => (
              <div
                key={section.id}
                className="w-full bg-gray-300 rounded-xl px-3 py-4 flex flex-col gap-2"
              >
                <h3 className="text-center text-xl px-3 font-semibold text-black opacity-75 bg-gray-300 py-2 rounded-lg">
                  {section.title}
                </h3>
                {section.labels.map((label, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-green-500 p-2 rounded-lg"
                  >
                    <span className="text-white font-semibold">{label}</span>
                    <div className="w-[50px] h-[30px] bg-black text-white flex items-center justify-center rounded-lg">
                      {randomValue()}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="w-[25%] h-full flex flex-col gap-5 items-center justify-between">
          <div className="flex items-center justify-center w-full h-[200px]">
            <SegmentedCircleBar />
          </div>

          <div className="w-full h-2/3 bg-gray-200 rounded-xl p-4 flex flex-col gap-2 items-center overflow-y-scroll">
            <h2 className="text-center text-xl font-semibold text-gray-700 mb-2">Alerts</h2>
            {alerts.map((alert, index) => (
              <div key={index} className="w-full bg-white rounded-lg p-3 shadow-md text-sm text-gray-700">
                <p>
                  <strong>Timestamp:</strong> {alert.timestamp}
                </p>
                <p>
                  <strong>Floor:</strong> {alert.floor}
                </p>
                <p>
                  <strong>Server:</strong> {alert.server}
                </p>
                <p>
                  <strong>Component:</strong> {alert.component}
                </p>
                <p>
                  <strong>Value:</strong> {alert.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
