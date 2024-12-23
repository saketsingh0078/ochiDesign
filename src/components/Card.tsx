interface props {
  title: string;
  image: string;
  btnText: string[];
}

const Card = ({ title, image, btnText }: props) => {
  return (
    <div className="w-full h-full ">
      <div className="flex gap-3 items-center py-2">
        <div className="w-[0.7vw] h-[0.7vw] rounded-full bg-black"></div>
        <h1 className="text-[1vw] font-light uppercase">{title}</h1>
      </div>
      <img className="rounded-lg bg-cover w-full h-full " src={image} alt="" />
      <div className="flex gap-2">
        {btnText.map((item, index) => (
          <button
            key={index}
            className="px-4 py-2 border-[1px] border-solid border-black rounded-full mt-4 uppercase font-light"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Card;
