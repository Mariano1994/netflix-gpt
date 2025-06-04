import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";
import { ManageUser } from "./manage-user";
import { Suspense } from "react";
import { NavLinks } from "./nav-links";
import { Logo } from "@/lib/contants";

async function Header() {
  const session = await auth();

  return (
    <div className=" w-full absolute z-30 ">
      <div className="max-w-[1200px] mx-auto py-8 flex items-center justify-between">
        <div className="flex  items-center gap-10">
          <Link href="/">
            <Image
              src={Logo}
              className={`${session ? "w-26" : "w-36"}`}
              alt="netflix logo image"
            />
          </Link>

          {session && <NavLinks />}
        </div>

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
