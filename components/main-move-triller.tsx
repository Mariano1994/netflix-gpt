import { getLatestMovies, getMovieVideoById } from "@/lib/api-reference";
import { MOVIE, VIDEO } from "@/lib/types";
import { generateRandomNumber } from "@/lib/utils";
import { Info, Play } from "lucide-react";
import { VideoBackground } from "./video-background";

async function MainMoveTrailer() {
  const movies: MOVIE[] = await getLatestMovies();
  const chosemoveToDisplay = generateRandomNumber(0, movies.length);

  if (!movies) return;

  const movieToDisplay = movies[chosemoveToDisplay];

  const movieVideos = await getMovieVideoById(movieToDisplay?.id);

  const videoTrailer = movieVideos?.filter(
    (video: VIDEO) => video.type === "Trailer"
  )[0];

  return (
    <main className="w-full ">
      <VideoBackground videoTrailer={videoTrailer} />
      <div className="px-30 mt-78 absolute z-50">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-4 ">
            <h1 className="text-5xl font-extrabold text-white">
              {movieToDisplay.title}
            </h1>
            <p className="text-md text-white font-medium tracking-wide leading-7 w-md">
              {movieToDisplay.overview}
            </p>

            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-3 py-2 px-6 text-black bg-white rounded-sm font-bold hover:brightness-95 hover:cursor-pointer">
                  <Play size={28} className="text-black" fill="currentColor" />
                  <span className="text-md">Play</span>
                </button>
                <button className="flex items-center gap-3 py-2 px-6 text-white bg-gray-500/60 rounded-sm font-bold hover:brightness-95 hover:cursor-pointer">
                  <Info size={28} className="text-white" />
                  <span className="text-md">More info</span>
                </button>
              </div>
              {/* <div>
                <span>move sound</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainMoveTrailer;
