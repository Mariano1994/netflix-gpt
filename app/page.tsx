import Image from "next/image";
import heroImage from "../app/assets/heroImage2.jpg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

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

            <form action="" className="flex gap-3 items-center mt-4 w-lg ">
              <Input
                type="email"
                placeholder="Email address"
                className="py-7.5 rounded-xs"
              />
              <Button className=" py-7.5 rounded-xs bg-red-600 text-lg font-bold hover:brightness-80 hover:text-white">
                <span>Get Started</span>
                <ChevronRight size={44} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
