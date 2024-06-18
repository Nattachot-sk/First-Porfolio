import { React, useState } from "react";

import "./App.css";
import Logoweb from "./components/Logoweb";
import Navbar from "./components/Navbar";
import FisrtPerson from "./components/FisrtPerson";
import Mybio from "./components/Mybio";
import RightSocial from "./components/RightSocial";
import About from "./components/About";
import Skill from "./components/Skill";

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

      <aside className="w-full h-[950px] flex">
        <div className="w-[50%] h-full ">
          <div className="w-[500px] h-full m-auto pt-[250px]">
            <Mybio />
          </div>
        </div>
        <div>
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
      <div>
        <Skill />
      </div>

      <footer>
        
      </footer>
    </div>
  );
}

export default App;
