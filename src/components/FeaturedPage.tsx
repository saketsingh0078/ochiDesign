import Card from "./Card";

const card = [
  {
    title: "Cardboard Spaceship",
    image:
      "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png",
    bntText: ["Banded Template", "Sales Desk", "Social media Templates"],
  },
  {
    title: "AH2 & Matt Horn",
    image:
      "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png",
    bntText: ["Putch Desk"],
  },
  {
    title: "Fyde",
    image:
      "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
    bntText: ["Audit", "Copywriting", "Sales Desk", "Slides Designss"],
  },
  {
    title: "Visa",
    image:
      "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
    bntText: ["Agency", "Company Presentation"],
  },
];

const FeaturedPage = () => {
  return (
    <div className="w-full h-screen ">
      <h1 className="text-[4vw] tracking-tight leading-none px-[3vw] py-[4vw]">
        Featured projects
      </h1>
      <div className="border-b-2 border-[#B2B2B2]"></div>
      <div className="w-full flex flex-wrap px-[3vw] py-[1vw] gap-4">
        {card.map((item, index) => (
          <div className="w-[49%] flex-shrink-0 h-full">
            <Card
              key={index}
              title={item.title}
              image={item.image}
              btnText={item.bntText || []}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-[4vw] pb-[3vw]">
        <button className="uppercase border-2 border-solid border-black px-[1vw] py-[0.6vw] rounded-full">
          View all the Project
        </button>
      </div>
    </div>
  );
};

export default FeaturedPage;
