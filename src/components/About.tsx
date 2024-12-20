const About = () => {
  return (
    <div className="w-full  pt-[7vw]  bg-[#CDEA68] rounded-t-3xl">
      <div className="text-[3.5vw] leading-none px-[2.6vw] font w-[85%] text-[#212121]">
        <h1>
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to{" "}
          <span className=" underline">raise funds</span>,{" "}
          <span className=" underline">sell prod­ucts</span>,{" "}
          <span className=" underline">ex­plain com­plex ideas</span>, and{" "}
          <span className=" underline">hire great peo­ple</span>.
        </h1>
      </div>

      <div className="border-b-2 mt-[5vw] border-[#BED862]"></div>

      <div className="flex justify-between pt-[2vw] font-normal">
        <p className="w-[51%] pl-[3vw]">What you can expect:</p>
        <div className="w-[19%] flex flex-col gap-5">
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
        <div className="w-[30%] pl-[10vw] pt-[4vw]">
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

      <div className="border-b-2 mt-[5vw] border-[#BED862]"></div>

      <div className="flex w-full ">
        <div className="w-1/2 pl-[2vw] flex flex-col">
          <h1 className="text-[4vw] font-base">Our approach:</h1>
          <div className="pt-[2vw]">
            <button className="uppercase flex border-2 border-solid rounded-full  px-[1vw] py-[1vw] items-center justify-center gap-4">
              Read more
              <span>
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
            </button>
          </div>
        </div>
        <div className="w-1/2 h-[80vh] p-[2vw]">
          <img
            className="w-full h-full rounded-xl "
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
