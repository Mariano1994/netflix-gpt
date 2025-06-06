import { VIDEO } from "@/lib/types";

interface VideoBackgroundProps {
  videoTrailer: VIDEO;
}

export async function VideoBackground({ videoTrailer }: VideoBackgroundProps) {
  return (
    <div className=" absolute h-screen w-full">
      <iframe
        className=" w-full aspect-video h-screen pointer-events-none select-none  "
        src={`https://www.youtube.com/embed/${videoTrailer?.key}?si=78kP7LybL47E0f_f&autoplay=1&mute=1&loop=1&playlist=${videoTrailer?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        allowFullScreen
      ></iframe>
    </div>
  );
}
