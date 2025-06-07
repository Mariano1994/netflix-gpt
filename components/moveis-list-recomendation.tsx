import {
  getLatestMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/api-reference";
import { MOVIE } from "@/lib/types";
import Image from "next/image";
import { MoveList } from "./move-list";

export async function MoveisListRecomendation() {
  const trendingMovies: MOVIE[] = await getLatestMovies();
  const popularMovies: MOVIE[] = await getPopularMovies();
  const topRatedMovies: MOVIE[] = await getTopRatedMovies();
  const upcomingMovies: MOVIE[] = await getUpcomingMovies();

  const listOfMovies = [
    {
      id: crypto.randomUUID(),
      title: "Trending Now",
      movies: trendingMovies,
    },
    {
      id: crypto.randomUUID(),
      title: "Popular on Netflix",
      movies: popularMovies,
    },
    { id: crypto.randomUUID(), title: "Top Rated", movies: topRatedMovies },
    {
      id: crypto.randomUUID(),
      title: "Comeing Soon",
      movies: upcomingMovies,
    },
  ];

  return (
    <div className=" relative flex flex-col gap-16 z-20 -mt-44  bg-gradient-to-b from-gray/15 to-black/5 ">
      {listOfMovies.map((list) => (
        <MoveList key={list.id} list={list.movies} title={list.title} />
      ))}
    </div>
  );
}
