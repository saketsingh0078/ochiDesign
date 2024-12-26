import { motion } from "framer-motion";

export const Marquee = () => {
  return (
    <div className="w-full bg-[#004D43] pt-[10vw] sm:pt-[6vw] pb-[6vw] sm:pb-[3vw] mt-[2vw] rounded-t-3xl">
      <div className="border-t-2 border-b-2 border-[#4D837C] flex whitespace-nowrap overflow-hidden text-white ">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="uppercase text-[24vw] sm:text-[15vw] font-bold -mt-[6vw] -mb-[4vw]"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="uppercase text-[24vw] sm:text-[15vw] font-bold  -mt-[6vw] -mb-[4vw]"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
};
