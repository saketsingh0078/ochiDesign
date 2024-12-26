import { useEffect, useState } from "react";

const Eyes = () => {
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
    <div className="eyes  h-screen w-full overflow-hidden">
      <div className="w-full h-full relative flex  bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-cover bg-center">
        <div className="absolute flex gap-10  left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="flex items-center justify-center w-[25vw] h-[25vw] sm:w-[15vw] sm:h-[15vw] rounded-full bg-white">
            <div className="relative w-[15vw] h-[15vw] sm:w-[10vw] sm:h-[10vw] rounded-full bg-black">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg) `,
                }}
                className="absolute w-full  left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] "
              >
                <div className="w-[3vw] h-[3vw]  sm:w-[1.5vw] sm:h-[1.5vw] rounded-full  bg-white"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[25vw] h-[25vw] sm:w-[15vw] sm:h-[15vw] rounded-full bg-white">
            <div className="relative w-[15vw] h-[15vw] sm:w-[10vw] sm:h-[10vw] rounded-full bg-black">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="absolute w-full  left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] "
              >
                <div className="w-[3vw] h-[3vw]  sm:w-[1.5vw] sm:h-[1.5vw]  rounded-full  bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
