import { getLatestMovies, getMovieVideoById } from "@/lib/api-reference";
import { MOVIE, VIDEO } from "@/lib/types";
import { generateRandomNumber } from "@/lib/utils";
import { VideoBackground } from "./video-background";
import { VideoBackgroundInfo } from "./video-background-info";

async function MainMoveTrailer() {
  // GET LATEST MOVIES
  const movies: MOVIE[] = await getLatestMovies();

  const chosemoveToDisplay = generateRandomNumber(0, movies.length);
  if (!movies) return;

  // BASED ON RANDOM NUMBER PICK A MOVIE TO DISPLAY
  const movieToDisplay = movies[chosemoveToDisplay];

  //
  const movieVideos = await getMovieVideoById(movieToDisplay?.id);
  const videoTrailer = movieVideos?.filter(
    (video: VIDEO) => video.type === "Trailer"
  )[0];

  return (
    <>
      <VideoBackground videoTrailer={videoTrailer} />
      <VideoBackgroundInfo movieToDisplay={movieToDisplay} />
    </>
  );
}

export default MainMoveTrailer;
