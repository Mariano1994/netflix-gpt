"use client";
import Link from "next/link";
import SelectIdio from "./select-idio";

const Footer = () => {
  return (
    <div className="h-[350px] bg-transparent w-full  ">
      <div className="max-w-[1200px] mx-auto mt-12 flex flex-col gap-12 text-zinc-300/80 ">
        <Link href="" className="underline w-xs">
          Questions? Contact us.
        </Link>

        <div className="flex items-start gap-32">
          <div className="flex flex-col gap-5">
            <Link href="" className="underline">
              FAQ.
            </Link>
            <Link href="" className="underline">
              nvestor Relations
            </Link>
            <Link href="" className="underline">
              Privacy
            </Link>
            <Link href="" className="underline">
              Speed Test
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            <Link href="" className="underline">
              Help Center
            </Link>
            <Link href="" className="underline">
              Jobs
            </Link>
            <Link href="" className="underline">
              Cookie Preferences
            </Link>
            <Link href="" className="underline">
              Legal Notices
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            <Link href="" className="underline">
              Account
            </Link>
            <Link href="" className="underline">
              Ways to Watch
            </Link>
            <Link href="" className="underline">
              Corporate Information
            </Link>
            <Link href="" className="underline">
              Only on Netflix
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            <Link href="" className="underline">
              Media Center
            </Link>
            <Link href="" className="underline">
              Terms of Use
            </Link>
            <Link href="" className="underline">
              Contact Us
            </Link>
          </div>
        </div>

        <SelectIdio />
      </div>
    </div>
  );
};

export default Footer;
