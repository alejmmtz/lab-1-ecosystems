import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="p-4 pr-6 flex items-center  mt-8 bg-[#A62631]">
      <i className="text-6xl mr-4 text-[#ffffff] cursor-pointer hn hn-star-solid"></i>
      <h1
        onClick={() => navigate("/")}
        className="text-4xl text-[#ffffff] tracking-[-0.02em]"
      >
        <span className="text-8xl mr-2 text-[#ffffff] tracking-[-.075em] cursor-pointer decoration-dashed decoration-2 underline underline-offset-5">
          The Eastern Oracle
        </span>
        / Wisdom for your entertaiment
      </h1>
    </div>
  );
}
