import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AnimeList() {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getAnimes = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.jikan.moe/v4/anime");

        if (response.status === 429) {
          setError(true);
          return;
        }

        const result = await response.json();
        setAnimes(result.data || []);
      } catch (error) {
        console.error("Error", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getAnimes();
  }, []);
  if (loading)
    return (
      <h1 className="p-10 text-center text-4xl  text-[#A62631]">
        Loading Oracle...
      </h1>
    );

  if (error)
    return (
      <h1 className="p-10 text-center text-2xl text-[#A62631]">
        Please wait a minute before consulting again.
      </h1>
    );

  return (
    <div>
      <div className="p-4 flex items-center">
        <i className="text-3xl mr-2 text-[#A62631] cursor-pointer hn hn-globe-americas-solid"></i>
        <h1 className="text-[#A62631] text-4xl w-full">Anime List</h1>
      </div>
      <div className="grid grid-cols-4 gap-4 px-4">
        {animes.map((anime) => (
          <div
            key={anime.mal_id}
            className="flex flex-col border-b-2 border-dashed border-[#A62631] pt-2 pb-4 group relative"
          >
            <div className="relative overflow-hidden">
              <img
                onClick={() => navigate(`/anime/${anime.mal_id}`)}
                src={anime.images.jpg.large_image_url}
                className="cursor-pointer w-full h-125 object-cover  transition-all duration-500 border-[#A62631]/0 border-dashed border-2 hover:border-[#A62631] hover:grayscale hover:scale-95"
              />{" "}
            </div>

            <h1 className="text-4xl text-[#A62631] mt-4 leading-none line-clamp-1">
              {anime.title}
            </h1>

            <h2 className="text-sm  mt-2 line-clamp-4">{anime.synopsis}</h2>
            <button
              onClick={() => navigate(`/anime/${anime.mal_id}`)}
              className="bg-[#A62631] mt-4 p-1 text-white text-xl font-jacquard cursor-pointer underline underline-offset-2 decoration-white/0 hover:decoration-white transition-all duration-500"
            >
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
