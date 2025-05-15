import Image from "next/image";
import logo from "../app/assets/logo.svg";
import { Button } from "./ui/button";
import Link from "next/link";
function Header() {
  return (
    <div className=" w-full absolute z-30 ">
      <div className="max-w-[1200px] mx-auto py-8 flex items-center justify-between">
        <div>
          <Image src={logo} className="w-36" alt="netflix logo image" />
        </div>

        <Link
          href="/sign-in"
          className="py-1 px-4 text-white  bg-red-600 rounded-xs font-bold hover:brightness-80 hover:text-white"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default Header;
