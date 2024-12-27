import { FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="h-[100%] w-20 flex flex-col justify-between py-5 items-center">
        <div className="profileImg w-[30px] h-[30px] rounded-full border-2 border-gray-950 "></div>
        <div className="flex flex-col justify-center items-center gap-10">
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => isActive ? "text-2xl text-purple-500 scale-130" : "text-2xl text-gray-500"}
          >
            <FaHome />
          </NavLink>
          <NavLink 
            to="/floor1" 
            className={({ isActive }) => isActive ? "text-xl text-purple-500 scale-130" : "text-xl text-gray-500"}
          >
            1
          </NavLink>
          <NavLink 
            to="/floor2" 
            className={({ isActive }) => isActive ? "text-xl text-purple-500 scale-110" : "text-xl text-gray-500"}
          >
            2
          </NavLink>
          <NavLink 
            to="/floor3" 
            className={({ isActive }) => isActive ? "text-xl text-purple-500 scale-110" : "text-xl text-gray-500"}
          >
            3
          </NavLink>
          <NavLink 
            to="/floor4" 
            className={({ isActive }) => isActive ? "text-xl text-purple-500 scale-110" : "text-xl text-gray-500"}
          >
            4
          </NavLink>
        </div>
        <div className="">
          <IoMdSettings className="text-gray-500 text-2xl" />
        </div>
      </div>
    </>
  );
};

export default SideBar;