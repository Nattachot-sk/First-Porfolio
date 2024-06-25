import { React, useState } from "react";

import "./App.css";
import Logoweb from "./components/Logoweb";
import Navbar from "./components/Navbar";
import FisrtPerson from "./components/FisrtPerson";
import Mybio from "./components/Mybio";
import RightSocial from "./components/RightSocial";
import About from "./components/About";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import Myworking from "./components/Myworking";



function App() {
  return (
    <div className="min-h-screen w-full">
      <header className="w-full h-[133px] bg-slate-900">
        <div className="w-[90%] h-full mx-auto  pt-2 flex">
          <div className="flex-1">
            <div className="w-[120px] h-[120px] ml-20">
              <Logoweb />
            </div>
          </div>
          <div className="flex-1 ">
            <div>
              <Navbar />
            </div>
          </div>
        </div>
      </header>

      <aside className="w-full h-[937px] flex">
        <div className="w-[50%] h-full">
          <div className="w-[650px] pl-10 h-full m-auto pt-[250px]">
            <Mybio />
          </div>
        </div>
        <div className="">
          <FisrtPerson />
        </div>
        <div className="reletive">
          <div className="fixed right-[10px] top-[35%]">
            <RightSocial />
          </div>
          
        </div>
      </aside>
      <div className="w-full h-[650px] bg-black">
        <About />
      </div>
      <div className="w-full h-[750px]">
        <Skill />
      </div>
      <div className="w-full h-full bg-amber-200">
        <Myworking />
      </div>
      <div className="w-full h-[350px] ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
