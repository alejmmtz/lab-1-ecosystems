import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#ffffff] border-t-4 border-[#A62631]  ">
      <div className="flex gap-10 justify-between items-center">
        <div className="p-4 pr-6 flex items-center ">
          <i className="text-4xl mr-4 text-[#A62631] cursor-pointer hn hn-star-solid"></i>
          <h1
            onClick={() => navigate("/")}
            className="text-2xl text-[#A62631] tracking-[-0.02em]"
          >
            <span className="text-5xl mr-2 text-[#A62631] tracking-[-.075em] cursor-pointer decoration-dashed decoration-2 underline underline-offset-5">
              The Eastern Oracle
            </span>
            / Wisdom for your entertaiment
          </h1>
        </div>
        <div className="p-4 items-center justify-end text-[#A62631]">
          <a href="https://docs.api.jikan.moe/" target="blank">
            <h2 className="text-sm font-bold tracking-[-.025em] underline cursor-pointer">
              Empowered by: https://docs.api.jikan.moe/
            </h2>
          </a>
          <div className="flex items-center justify-end">
            <h2 className="text-sm font-bold tracking-[-.025em]  cursor-pointer">
              [
            </h2>
            <i className="text-sm text-[#A62631] cursor-pointer hn hn-exclaimation-solid"></i>
            <h2 className="text-sm font-bold tracking-[-.025em] underline cursor-pointer">
              made-by/@alejmmtz ]
            </h2>
            <h2 className="text-sm font-bold ml-2 tracking-[-.025em]  cursor-pointer">
              [
            </h2>
            <i className="text-sm text-[#A62631] cursor-pointer hn hn-question-solid"></i>
            <a
              href="https://www.youtube.com/watch?v=Y3dt6-Xpjgg"
              target="blank"
            >
              <h2 className="text-sm font-bold tracking-[-.025em] underline cursor-pointer">
                Hello, World! ]
              </h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
