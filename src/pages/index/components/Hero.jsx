export default function Hero() {
  return (
    <div className="w-full h-full flex relative">
      <div className="absolute z-10 p-2 pl-6 pr-4 -ml-4 mt-8 bg-[#A62631] flex items-center justify-center">
        <i className="text-3xl mr-2 text-[#F1F0F2] hn hn-fire-solid"></i>
        <h1 className="text-[#F1F0F2] text-4xl">Trending</h1>
        <i className="text-3xl ml-2 text-[#F1F0F2] hn hn-fire-solid"></i>
      </div>

      <div className="w-full h-[90vh] bg-center bg-[url(https://i.redd.it/i29iqscbs2d41.jpg)] bg-cover flex flex-col justify-end p-20"></div>
    </div>
  );
}
