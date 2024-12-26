interface props {
  title: string;
  image: string;
  btnText: string[];
}

const Card = ({ title, image, btnText }: props) => {
  return (
    <div className="w-full h-full ">
      <div className="flex gap-3 items-center py-2">
        <div className="w-[2vw] h-[2vw] md:w-[0.7vw] md:h-[0.7vw] rounded-full bg-black"></div>
        <h1 className="text-[4vw] md:text-[1vw]  font-light uppercase">
          {title}
        </h1>
      </div>
      <img className="rounded-lg bg-cover w-full h-full " src={image} alt="" />
      <div className="flex gap-2">
        {btnText.map((item, index) => (
          <button
            key={index}
            className="px-[1vw] py-[0.8vw] md:px-[0.6vw] md:py-[0.4vw] text-[2.8vw] md:text-[1.2vw] lg:text-[0.8vw]  border-[1px] border-solid border-black rounded-full mt-4 uppercase font-light  hover:bg-black hover:text-white transition-all duration-300"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Card;
