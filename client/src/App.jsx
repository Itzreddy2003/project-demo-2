import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Floor1 from "./pages/Floor1";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="floor1" element={<Floor1/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
