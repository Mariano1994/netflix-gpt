import { imageBaseUrlTMDB } from "@/lib/contants";
import { MOVIE } from "@/lib/types";
import Image from "next/image";

interface MoveListProps {
  list?: MOVIE[];
  title: string;
}

export async function MoveList({ list, title }: MoveListProps) {
  return (
    <div className=" flex flex-col gap-4 ">
      <h2 className="text-white text-xl font-semibold px-8">{title}</h2>
      <div className=" flex gap-4 overflow-x-scroll no-scrollbar px-8">
        {list?.map((movie) => (
          <Image
            key={movie.id}
            src={`${imageBaseUrlTMDB}${movie.poster_path}`}
            alt={movie.title}
            width={150}
            height={150}
            className="object-cover rounded-sm"
          />
        ))}
      </div>
    </div>
  );
}
