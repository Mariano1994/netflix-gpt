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
// GET POPULAR MOVIES DATA FROM TMDB API
export async function getPopularMovies() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2",
    API_OPTIONS
  );
  const movies = await response.json();
  return movies.results;
}
// GET TOP RATED MOVIES DATA FROM TMDB API
export async function getTopRatedMovies() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=3",
    API_OPTIONS
  );
  const movies = await response.json();
  return movies.results;
}
// GET UPCOMING MOVIES DATA FROM TMDB API
export async function getUpcomingMovies() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=4",
    API_OPTIONS
  );
  const movies = await response.json();
  return movies.results;
}

// GET MOVIE VIDEOS DATA FROM TMDB API BY MOVIE ID
export async function getMovieVideoById(id: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    API_OPTIONS
  );
  const video = await response.json();
  return video.results;
}
