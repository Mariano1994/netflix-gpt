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
