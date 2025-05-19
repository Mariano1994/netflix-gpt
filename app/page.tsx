import Image from "next/image";
import heroImage from "../app/assets/heroImage2.jpg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import watchImage from "../app/assets/watchTv.png";
import donwloadImage from "../app/assets/donwload.png";
import everywereImage from "../app/assets/everywere.png";
import kidsProfileImage from "../app/assets/kidsprofile.png";
import GetStartForm from "@/components/forms/get-start-form";
import FrenquentsQuestions from "@/components/frenquents-questions";

export default function Home() {
  return (
    <div className=" h-scree ">
      <div className=" h-screen z-10">
        <div className="relative h-screen ">
          <Image
            fill
            priority
            src={heroImage}
            alt="hero image "
            className="object-cover"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-screen w-full bg-black/74 flex  items-center justify-center">
          <div className="flex flex-col items-center text-center w-2xl">
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-6xl font-bold text-white leading-19 ">
                Unlimited movies, TV shows, and more
              </h1>
              <p className="text-xl text-white font-medium tracking-wide">
                Start at USD 2.99. Cancel anytime
              </p>
              <span className="text-base text-white tracking-wide mt-2">
                {" "}
                Ready to watch? Enter your email to create or restart your
                membership
              </span>
            </div>
            <GetStartForm />
          </div>
        </div>
      </div>
      <Separator orientation="horizontal" className="bg-zinc-600/50 py-0.5" />
      <div className="mt-8 mb-12 space-y-8 md:max-w-[980px] 2xl:max-w-[1100px] mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-4 max-w-md">
            <strong className="md:text-4xl 2xl:text-5xl font-bold">
              Enjoy on your TV.
            </strong>
            <p className="md:text-lg 2xl:text-xl font-light">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <Image src={watchImage} className="w-2/3" alt="watch image" />
        </div>
      </div>
      <Separator orientation="horizontal" className="bg-zinc-600/50 py-0.5" />

      <div className="mt-8 mb-12 space-y-8 md:max-w-[980px] 2xl:max-w-[1100px] mx-auto">
        <div className="flex items-center justify-between">
          <Image src={donwloadImage} className="w-2/3" alt="watch image" />
          <div className="flex flex-col gap-4 max-w-md">
            <strong className="md:text-4xl 2xl:text-5xl font-bold">
              Download your shows to watch offline.
            </strong>
            <p className="md:text-lg 2xl:text-xl font-light">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
      <Separator orientation="horizontal" className="bg-zinc-600/50 py-0.5" />

      <div className="mt-8 mb-12 space-y-8 md:max-w-[980px] 2xl:max-w-[1100px] mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-4 max-w-md">
            <strong className="md:text-4xl 2xl:text-5xl font-bold">
              Watch everywhere.
            </strong>
            <p className="md:text-lg 2xl:text-xl font-light">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more.
            </p>
          </div>
          <Image src={everywereImage} className="w-2/3" alt="watch image" />
        </div>
      </div>
      <Separator orientation="horizontal" className="bg-zinc-600/50 py-0.5" />
      <div className="mt-8 mb-12 space-y-8 md:max-w-[980px] 2xl:max-w-[1100px] mx-auto">
        <div className="flex items-center justify-between">
          <Image src={kidsProfileImage} className="w-2/3" alt="watch image" />
          <div className="flex flex-col gap-4 max-w-md">
            <strong className="md:text-4xl 2xl:text-5xl font-bold">
              Create profiles for kids.
            </strong>
            <p className="md:text-lg 2xl:text-xl font-light">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>
      <Separator orientation="horizontal" className="bg-zinc-600/50 py-0.5" />

      <div className="mt-12 mb-12 space-y-8 md:max-w-[980px] 2xl:max-w-[1100px] mx-auto">
        <FrenquentsQuestions />
      </div>
    </div>
  );
}
