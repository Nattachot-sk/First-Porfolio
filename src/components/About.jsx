import React from "react";

function About() {
  return (
    <div className="w-full h-full text-white">
      <div className="w-[80%] h-full p-10 mx-auto relative">
        <div className="relative mb-5">
          <div className="w-[120px] relative mx-auto h-10 text-center content-center rounded-md bg-indigo-500 shadow-md shadow-cyan-500/50 border-t-2 border-t-blue-500">
            <h1 className="text-2xl">About</h1>
          </div>
        </div>
        <div className="w-full h-[450px] bg-neutral-950 rounded-md shadow-md shadow-white">
          <div className="flex w-full text-center">
            <div className="flex-1 mt-5 border-r-2">
              <h1 className="p-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, aliquid?
              </h1>
            </div>
            <div className="flex-1 mt-5">
              <h1 className="pr-5 pt-5 pl-5">
                I'm junior senior programmer coding
              </h1>
              <h1>& profressional UX/UI</h1>
            </div>
          </div>
          <hr className="mt-5" />
          <div className="flex justify-center text-center p-5 w-full h-[75%]">
            <div className="flex-1 border-r-2">
              <div className="mt-10">
                <h1>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Commodi, alias.
                </h1>
                <div className="mt-10 p-5">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus aspernatur blanditiis accusamus quidem minus
                    dignissimos nobis nostrum qui, doloribus inventore rerum
                    perferendis praesentium molestiae eum facilis sed sint quas
                    ex ratione vel maxime laboriosam cupiditate! Cumque itaque
                    veniam doloremque voluptas est, a sit repellat, eveniet,
                    voluptatibus ipsam officiis aspernatur magni!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="mt-5 ">
                <div className="mt-10 text-left pl-[80px]">
                  <p>Name : Natthachot Sankhum </p>
                  <p>Age : 23 year</p>
                  <p>Email : natthachot.ntc19@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
