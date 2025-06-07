import { MOVIE } from "@/lib/types";
import { Info, Play } from "lucide-react";

interface MovieToDisplayProps {
  movieToDisplay: MOVIE;
}

export async function VideoBackgroundInfo({
  movieToDisplay,
}: MovieToDisplayProps) {
  return (
    <div className="px-30 mt-78 absolute z-50">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-5xl font-extrabold text-white">
            {movieToDisplay?.title}
          </h1>
          <p className="text-md text-white font-medium tracking-wide leading-7 w-md">
            {movieToDisplay?.overview}
          </p>

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-3 py-2 px-6 text-black bg-white rounded-sm font-bold hover:brightness-85 hover:cursor-pointer">
                <Play size={28} className="text-black" fill="currentColor" />
                <span className="text-md">Play</span>
              </button>
              <button className="flex items-center gap-3 py-2 px-6 text-white bg-gray-500/60 rounded-sm font-bold hover:brightness-95 hover:cursor-pointer">
                <Info size={28} className="text-white" />
                <span className="text-md">More info</span>
              </button>
            </div>

            {/* TODO: Button to activate sound on video background */}
            {/* <div>
                <span>move sound</span>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
