import React from "react";

function Skill() {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-2 grid-rows-1 w-full h-full p-20">
        <div className="col-span-1 bg-red-200">
          <div className="">frontend</div>
        </div>
        <div className="col-span-1 bg-cyan-200">
          <div className="">backend</div>
        </div>
        <div className="col-span-2 w-full h-[250px] mx-auto bg-orange-100">dd</div>
      </div>
    </div>
  );
}

export default Skill;
