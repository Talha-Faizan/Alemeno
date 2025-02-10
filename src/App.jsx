import React from "react";
import Navbar from './Components/Navbar'
import Courses from "./Components/Courses";
import Desc from "./Components/Description";
import Dashboard from "./Components/Dashboard";

const App = () => {
  return (
    <>
     <Navbar />
      <Courses />
      <Desc />
      <Dashboard />
    </>
  );
};

export default App;
