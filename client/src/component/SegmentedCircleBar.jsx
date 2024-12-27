import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function SegmentedCircleBar({ r = 80, cx = 90, cy = 90, strokeWidth = 14 }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const randomProgress = Math.floor(Math.random() * 101); // Generate random value between 0 and 100
    setProgress(randomProgress);
  }, []); // Runs only on mount

  const circumference = 2 * Math.PI * r;
  const offset = circumference * ((100 - progress) / 100);

  return (
    <div className="relative w-[180px] h-[180px] flex items-center justify-center">
      {/* Outer Blur Effect */}
      <div
        className={`absolute inset-0 rounded-full ${
          progress < 50 ? "bg-green-500" : "bg-red-500"
        } opacity-50 blur-[4px] animate-pulse-scale`}
      ></div>

      {/* Progress Bar */}
      <svg className="rotate-[-90deg] w-[180px] h-[180px]">
        <circle
          r={r}
          cy={cy}
          cx={cx}
          strokeWidth={strokeWidth}
          className="fill-transparent stroke-gray-50 border-gray-900 border-2"
        />
        <circle
          r={r}
          cy={cy}
          cx={cx}
          strokeWidth={strokeWidth}
          className="fill-transparent"
          style={{
            stroke: progress < 50 ? "green" : "red",
            strokeDasharray: `${circumference}px`,
            strokeDashoffset: `${offset}px`,
            strokeLinecap: "round",
          }}
        />
      </svg>

      {/* Text Content */}
      <div className="absolute flex flex-col items-center justify-center">
        <div className="text-gray-700 font-inter-semibold text-xl">{progress}%</div>
        <div className="text-gray-700 font-inter text-[24px]">
          {progress < 50 ? "Safe" : "Danger"}
        </div>
      </div>
    </div>
  );
}
SegmentedCircleBar.propTypes = {
  r: PropTypes.number,
  cx: PropTypes.number,
  cy: PropTypes.number,
  strokeWidth: PropTypes.number,
};


export default SegmentedCircleBar;
