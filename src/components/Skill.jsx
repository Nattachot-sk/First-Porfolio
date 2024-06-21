import { React, useEffect } from "react";

function Skill() {
  const frontendData = [
    {
      id: "1",
      name: "html",
      images: "/img/logofend/html-5.png",
    },
    {
      id: "2",
      name: "css",
      images: "/img/logofend/css-3.png",
    },
    {
      id: "3",
      name: "javascript",
      images: "/img/logofend/js.png",
    },
    {
      id: "4",
      name: "react",
      images:
        "https://th.bing.com/th/id/R.df70b00589269cc7e903d0e3ba9db627?rik=eCKbjKCDeZJNnw&pid=ImgRaw&r=0",
    },
    {
      id: "5",
      name: "next",
      images: "/img/logofend/next-js-logo.png",
    },
    {
      id: "6",
      name: "tailwind",
      images:
        "https://logospng.org/download/tailwind-css/tailwind-css-1024.png",
    },
  ];

  const backendData = [
    {
      id: "1",
      name: "node",
      images:
        "https://1.bp.blogspot.com/-sqAjIvOtpXI/XYoCmqOyMwI/AAAAAAAAJig/CowR8wgEauEs-RXN2IPmLYkC7NHoHuA3gCLcBGAsYHQ/s1600/node-js-logo.png",
    },
    {
      id: "2",
      name: "mysql",
      images: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
    },
    {
      id: "3",
      name: "php",
      images: "/img/logofend/php.png",
    },
  ];
  const toolsData = [
    {
      id: "1",
      name: "git",
      images: "/img/toollogo/git.png",
    },
    {
      id: "2",
      name: "github",
      images: "/img/toollogo/github.png",
    },
    {
      id: "3",
      name: "postman",
      images: "/img/toollogo/postman.png",
    },
  ];

  useEffect(() => {}, []);

  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-2 grid-rows-1 mx-auto w-[1200px] h-full p-20">
        <div className="col-span-1  w-full h-full relative text-wrap p-5">
          <div className="bg-black text-white text-center shadow-sm p-2 shadow-white">Frontend</div>
          <div className="relative">
            <ul className="grid grid-cols-3 justify-center justify-items-center w-full h-full">
              {frontendData.map((fend) => {
                return (
                  <li
                    className="w-32 h-32 mx-[20px] bg-gray-100 mt-3 rounded-md flex shadow-lg shadow-black p-5"
                    key={fend.id}
                  >
                    <img className="" src={fend.images} alt="" />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="col-span-1  relative p-5">
          <div className="bg-black text-white text-center shadow-sm p-2 shadow-white"><h1></h1>Backend</div>
          <div className="relative">
            <ul className="grid grid-cols-3 justify-center justify-items-center w-full h-full">
              {backendData.map((fend) => {
                return (
                  <li
                    className="w-32 h-32 mx-[20px] bg-gray-100 mt-3 rounded-md flex shadow-lg shadow-black p-5"
                    key={fend.id}
                  >
                    <img className="" src={fend.images} alt="" />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="col-span-2 w-full h-[250px] mx-auto ">
          <div className="bg-black text-white text-center shadow-sm p-2 shadow-white mt-5">
            <h1>Tools</h1>
          </div>
          <div className="relative">
            <ul className="flex justify-center justify-items-center w-full h-full">
              {toolsData.map((tools) => {
                return (
                  <li
                    className="w-32 h-32 mx-[20px] bg-gray-100 mt-3 rounded-md flex shadow-lg shadow-black p-5"
                    key={tools.id}
                  >
                    <img className="" src={tools.images} alt="" />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
