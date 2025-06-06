import { API_OPTIONS } from "./contants";

// GET LATEST MOVIES DATA FROM TMDB API
export async function getLatestMovies() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    API_OPTIONS
  );
  const movies = await response.json();
  return movies.results;
}

// GET MOVIE TRAILER
export async function getMovieVideoById(id: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    API_OPTIONS
  );
  const video = await response.json();
  return video.results;
}
