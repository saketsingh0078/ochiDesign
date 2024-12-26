const About = () => {
  return (
    <div className="w-full pt-[10vw] sm:pt-[7vw]  bg-[#CDEA68] rounded-t-3xl">
      <div className="text-[3.5vw] leading-none px-[4vw] sm:px-[2.6vw] font w-full sm:w-[85%] text-[#212121]">
        <h1 className="text-[7vw] sm:text-[3vw]">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to{" "}
          <span className=" underline">raise funds</span>,{" "}
          <span className=" underline">sell prod­ucts</span>,{" "}
          <span className=" underline">ex­plain com­plex ideas</span>, and{" "}
          <span className=" underline">hire great peo­ple</span>.
        </h1>
      </div>

      <div className="border-b-2 mt-[15vw] sm:mt-[5vw] border-[#BED862]"></div>

      <div className=" sm:flex justify-between pt-[7vw] sm:pt-[2vw] font-normal">
        <p className="w-full sm:w-[51%] pb-[4vw] pl-[3vw]">
          What you can expect:
        </p>
        <div className="w-full pl-[3vw] sm:w-[19%] flex flex-col gap-5 ">
          <p>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </p>
          <p>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="w-[30%] sm:w-[30%] pl-[3vw] sm:pl-[10vw] pt-[8vw] sm:pt-[4vw]">
          <h1 className="pb-[1vw]">S: </h1>
          {["Instagram", "Behance", "Facebook", "Linkedin"].map(
            (item, index) => (
              <h6 key={index} className="underline">
                {item}
              </h6>
            )
          )}
        </div>
      </div>

      <div className="border-b-2  mt-[15vw] sm:mt-[5vw] border-[#BED862]"></div>

      <div className="sm:flex w-full pt-[4vw] pb-[12vw] ">
        <div className="w-1/2 pl-[3vw] sm:pl-[2vw] flex flex-col">
          <h1 className="text-[5.5vw] sm:text-[4vw] font-base">
            Our approach:
          </h1>
          <div className="pt-[4vw] sm:pt-[2vw] pb-[6vw] sm:pb-0">
            <button className="uppercase flex border-2 border-solid border-[#000] bg-black text-[#fff] rounded-full  px-[1.8vw] py-[1vw] items-center justify-center gap-4 hover:opacity-90">
              Read more
              <div className="rounded-full">
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="w-full sm:w-1/2 h-[65vh]  sm:h-[80vh] p-[3vw] sm:p-[2vw] hover:scale-95">
          <img
            className="w-full h-full rounded-xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
