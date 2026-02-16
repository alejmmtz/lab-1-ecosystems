import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../pages/index/components/navBar";
import Footer from "../index/components/Footer";

export default function AnimePage() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getAnimeData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        if (response.status === 429) {
          setError(true);
          return;
        }

        const result = await response.json();
        setAnime(result.data);
      } catch (error) {
        console.error("Error", error);
      } finally {
        setLoading(false);
      }
    };

    getAnimeData();
  }, [id]);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center ">
        <h1 className="text-6xl text-[#A62631]">Loading the Oracle...</h1>
      </div>
    );

  if (error)
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-6xl text-[#A62631]">404 Error</h1>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <NavBar />

      <div className="w-full mx-auto p-4 flex flex-row gap-8">
        <div className="w-1/3">
          <img src={anime.images.jpg.large_image_url} className="w-full " />
        </div>

        <div className="w-2/3">
          <h1 className="text-7xl mb-4 text-[#A62631] leading-none">
            {anime.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-4">
            {anime.titles.map((title, index) => (
              <h1
                key={index}
                className="text-lg normal-case bg-[#A62631] text-[#ffffff] p-2 tracking-widest"
              >
                {title.title}
              </h1>
            ))}
          </div>

          <div className="flex gap-8 border-y border-dashed border-[#A62631] py-4 font-sans text-sm">
            <h2>
              <span className="font-bold">Started on: </span> {anime.aired.from}
            </h2>
            <h2>
              <span className="font-bold">Ended on: </span> {anime.aired.to}
            </h2>
          </div>

          <h2 className="text-lg mt-4 italic">{anime.synopsis}</h2>

          <h1
            onClick={() => navigate("/")}
            className="inline-block mt-4 text-[#A62631]  text-3xl hover:underline cursor-pointer"
          >
            Return
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
