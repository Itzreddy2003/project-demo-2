import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Floor1 from "./pages/Floor1";
import Floor2 from "./pages/Floor2";
import Floor3 from "./pages/Floor3";
import Floor4 from "./pages/Floor4";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="floor1" element={<Floor1/>}/>
          <Route path="floor2" element={<Floor2/>}/>
          <Route path="floor3" element={<Floor3/>}/>
          <Route path="floor4" element={<Floor4/>}/>
        </Route>

      </Routes>
    </>
  );
};

export default App;
