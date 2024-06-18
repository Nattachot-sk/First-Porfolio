import React from "react";

function About() {
  return (
    <div className="w-full h-full text-white">
      <div className="w-[80%] h-full p-10 mx-auto relative">
        <div className="relative -left-20 mb-5">
          <div className="w-[120px] h-10 text-center content-center bg-indigo-500 border-2 outline-2 outline-orange-300">
            <h1 className="text-2xl">About</h1>
          </div>
          
        </div>
        <div className=" bg-red-400">
          <div className="flex justify-center text-center">
            <div className="flex-1 border-r-4">
              <h1>About</h1>
            </div>
            <div className="flex-1">
              <h1>About</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
