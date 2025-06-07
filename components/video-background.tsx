import { VIDEO } from "@/lib/types";

interface VideoBackgroundProps {
  videoTrailer: VIDEO;
}

export async function VideoBackground({ videoTrailer }: VideoBackgroundProps) {
  return (
    <div className="absolute h-screen  ">
      <iframe
        className="aspect-video w-full h-screen pointer-events-none select-none object-cover "
        src={`https://www.youtube.com/embed/${videoTrailer?.key}?si=78kP7LybL47E0f_f&autoplay=1&mute=1&loop=1&playlist=${videoTrailer?.key}&controls=0&autohide=1&showinfo=0&rel=0&enablejsapi=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}
