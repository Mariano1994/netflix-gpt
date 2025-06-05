import { auth } from "@/auth";
import { getLatestMovies } from "@/lib/api-reference";
import { imageBaseUrlTMDB } from "@/lib/contants";
import { MOVIE } from "@/lib/types";
import { redirect } from "next/navigation";

async function Browse() {
  const session = await auth();
  {
    if (!session) {
      redirect("/sign-in");
    }
  }
  const latestMovies: MOVIE[] = await getLatestMovies();

  return (
    <div className="h-screen w-full bg-white/50">
      <span>Movies</span>
    </div>
  );
}

export default Browse;
