import Image from "next/image";
import Link from "next/link";
import logo from "../app/assets/logo.svg";
import { auth } from "@/auth";
import { ManageUser } from "./manage-user";
import { Suspense } from "react";

async function Header() {
  const session = await auth();

  return (
    <div className=" w-full absolute z-30 ">
      <div className="max-w-[1200px] mx-auto py-8 flex items-center justify-between">
        <Link href="/">
          <Image src={logo} className="w-36" alt="netflix logo image" />
        </Link>

        {!session ? (
          <Link
            href="/sign-in"
            className="py-1 px-4 text-white  bg-red-600 rounded-xs font-bold hover:brightness-80 hover:text-white"
          >
            Sign In
          </Link>
        ) : (
          <Suspense>
            <ManageUser />
          </Suspense>
        )}
      </div>
    </div>
  );
}

export default Header;
