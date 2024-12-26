import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function LandingPage() {
  const [targetWidth, setTargetWidth] = useState("10vw");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setTargetWidth("20vw"); // Small screens
      } else if (window.innerWidth < 1024) {
        setTargetWidth("15vw"); // Medium screens
      } else {
        setTargetWidth("10vw"); // Large screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial setup for correct width on load

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="">
      <div className="px-[2.5vw] pt-[35vw] pb-[20vw] md:px-16 md:pt-40 md:py-32 uppercase leading-[14vw] md:leading-[6vw] -tracking-[0.5vw]">
        <div className="masker">
          <h1 className="text-[12vw] md:text-[7vw] font-bold"> We create</h1>
        </div>

        <div className="masker">
          <div className="flex ">
            <motion.div
              initial={{ width: "0" }}
              animate={{ width: targetWidth }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="h-[25vw] sm:h-[5vw] mt-[1vw] mb-[1vw] rounded-sm"
            >
              <img
                className="h-full w-full rounded-sm"
                src="	https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                alt=""
              />
            </motion.div>
            <h1 className="text-[12vw] md:text-[7vw] font-bold">eye-opening</h1>
          </div>
        </div>

        <div className="masker">
          <h1 className="text-[12vw] md:text-[7vw] font-bold">presentations</h1>
        </div>
      </div>

      <div className="border-b-2 border-[#D2D2D2]"></div>

      <div className="flex items-center justify-between px-[2.5vw] py-[10vw] md:px-16 md:pt-4 md:font-light font-normal ">
        <h1 className="text-[4vw] sm:text-sm pr-[2vw]">
          For public and private companies
        </h1>
        <h1 className="text-[4vw] pr-[2vw] sm:text-sm ">
          From the first pitch to IPO
        </h1>
        <div className="flex gap-2">
          <button className="text-[2.4vw] sm:text-sm px-[4vw] py-[0.5w] uppercase border-2 border-solid border-black md:px-2 md:py-1 rounded-full hover:bg-black hover:text-white transition-all duration-300">
            start the project
          </button>

          <div className="flex items-center justify-center  md:w-8 md:h-8 border-2 border-solid border-black rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 sm:size-6 mx-[2vw] sm:mx-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
