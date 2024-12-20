function LandingPage() {
  return (
    <div className="">
      <div className="px-16 pt-40 py-32 uppercase leading-[6vw] -tracking-[0.5vw]">
        <div className="masker">
          <h1 className="text-[7vw] font-bold"> We create</h1>
        </div>

        <div className="masker">
          <div className="flex ">
            <div className="bg-red-500 w-[10vw] h-[6vw]"></div>
            <h1 className="text-[7vw] font-bold">eye-opening</h1>
          </div>
        </div>

        <div className="masker">
          <h1 className="text-[7vw] font-bold">presentations</h1>
        </div>
      </div>

      <div className="border-b-2 border-[#D2D2D2]"></div>

      <div className="flex items-center justify-between px-16 pt-4 font-light ">
        <h1>For public and private companies</h1>
        <h1>From the first pitch to IPO</h1>
        <div className="flex gap-2">
          <button className="uppercase border-2 border-solid border-black px-2 py-1 rounded-full">
            start the project
          </button>

          <div className="flex items-center justify-center w-8 h-8 border-2 border-solid border-black rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 "
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
