import SignInForm from "@/components/forms/sign-in-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import heroImage from "../../assets/heroImage2.jpg";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const sesseion = await auth();

  {
    if (sesseion) {
      redirect("/browse");
    }
  }
  return (
    <>
      <div>
        <div className="h-screen">
          <Image
            fill
            priority
            src={heroImage}
            alt="hero image "
            className="object-cover"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-screen w-full bg-black/60 flex  items-center justify-center">
          <div className="flex flex-col  w-md bg-black/70 p-14">
            <div className="flex flex-col -mt-4 gap-3">
              <h1 className="text-4xl font-bold text-white leading-19 ">
                Sign In
              </h1>
            </div>
            <SignInForm />
            <div className=" text-center mt-5 font-light text-gray-100">
              <span>OR</span>
            </div>
            <Button className=" mt-3 py-5 w-full rounded-xs bg-gray-50/35 text-md font-semibold hover:brightness-80 hover:text-white">
              <span>Use a Sign In Code</span>
            </Button>

            <div className="mt-2">
              <span className="text-center  font-light text-gray-50 block">
                <Link href="" className=" text-gray-50 underline">
                  Forgote your password?
                </Link>
              </span>

              <div className="flex items-center gap-2 mt-6">
                <Checkbox
                  id="terms"
                  className="text-gray-50 h-5 w-5 bg-black"
                />
                <Label htmlFor="terms" className="text-gray-50 text-md">
                  {" "}
                  Remember me
                </Label>
              </div>

              <div className="mt-6">
                <span className=" text-center font-light text-gray-50">
                  New to Netflix?{" "}
                  <Link href="/sign-up" className=" font-bold">
                    Sign up now
                  </Link>
                </span>

                <p className=" text-sm font-light text-zinc-400 mt-5">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.{" "}
                  <Link href="" className=" underline text-blue-400">
                    Learn more.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
