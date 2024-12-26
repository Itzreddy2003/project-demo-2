import { FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <div className="h-[100%] w-20 flex flex-col justify-between py-5 items-center">
        <div className="profileImg w-[30px] h-[30px] rounded-full border-2 border-gray-950 "></div>
        <div className="flex flex-col justify-center items-center gap-10">
          <FaHome className="text-2xl text-purple-500" />
          <Link to={'/floor1'}><h1 className="text-xl">1</h1></Link>
          <h1 className="text-xl">2</h1>
          <h1 className="text-xl">3</h1>
          <h1 className="text-xl">4</h1>
        </div>
        <div className="">
          <IoMdSettings className="text-gray-500 text-2xl" />
        </div>
        
      </div>
    </>
  );
};

export default SideBar;
