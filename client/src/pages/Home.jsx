import { Outlet } from "react-router-dom"
import SideBar from "../component/SideBar"
// import Dashboard from "./Dashboard"

const Home = () => {
  return (
    <>
      <div className="HomePage w-full h-screen flex py-4">
        <SideBar/>
        <Outlet/>
      </div>
    </>
  )
}

export default Home
