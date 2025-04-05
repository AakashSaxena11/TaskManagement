import React from "react";
import Home from "./pages/Home";
import Alltasks from "./pages/Alltasks";
import Imptasks from "./pages/Imptasks";
import Inctasks from "./pages/Inctasks";
import Comtasks from "./pages/Comtasks";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
  <div className="bg-gray-900 text-white h-screen p-2">
     <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}>
        <Route index element={<Alltasks/>}/>
        <Route path="/importanttasks" element={<Imptasks/>}/>
        <Route path="/incompletetasks" element={<Inctasks/>}/>
        <Route path="/completedtasks" element={<Comtasks/>}/>
        </Route>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
     </Router>
  </div>
  );
};

export default App;