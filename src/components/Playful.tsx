import { useEffect, useState } from "react";

const Playful = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);

      return window.removeEventListener("mousemove", () => {});
    });
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#CDEA68]">
      <div className="flex flex-col  items-center justify-center h-full">
        <h1 className="text-[10vw] uppercase leading-[8vw] tracking-tighter font-bold">
          Ready
        </h1>
        <h1 className="text-[10vw] uppercase leading-[8vw] tracking-tighter font-bold">
          to start
        </h1>
        <h1 className="text-[10vw] uppercase leading-[8vw] tracking-tighter font-bold">
          the project?
        </h1>

        <button className="uppercase border-2 border-solid border-black px-[1vw] py-[0.7vw] mt-[5vw] rounded-full  hover:bg-black hover:text-white transition-all duration-300 ">
          Start the Project
        </button>

        <h1 className="uppercase mt-[1vw]">Or</h1>

        <button className="uppercase border-2 border-solid border-black px-[1vw] py-[0.7vw]  mt-[1vw] rounded-full  hover:bg-black hover:text-white transition-all duration-300">
          Hero@ochi.design
        </button>
      </div>

      <div className="absolute w-[34vw] h-[20vw] left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
        <div className="flex gap-[2vw]">
          <div className="relative w-[16vw] h-[16vw] rounded-full bg-[white]">
            <div className="absolute flex justify-center items-center left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-[10vw] h-[10vw] rounded-full bg-[#000]">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg) `,
                }}
                className="absolute w-full  left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] "
              >
                <div className=" w-[1.5vw] h-[1.5vw] rounded-full bg-white"></div>
              </div>
            </div>
          </div>

          <div className="relative w-[16vw] h-[16vw] rounded-full bg-[white]">
            <div className="absolute flex justify-center items-center left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-[10vw] h-[10vw] rounded-full bg-[#000]">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg) `,
                }}
                className="absolute w-full  left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] "
              >
                <div className=" w-[1.5vw] h-[1.5vw] rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playful;
