import { auth } from "@/auth";
import MainMoveTrailer from "@/components/main-move-triller";
import { redirect } from "next/navigation";
import { Suspense } from "react";

async function Browse() {
  const session = await auth();
  {
    if (!session) {
      redirect("/sign-in");
    }
  }
  return (
    <div className="h-screen w-full bg-white/10">
      <Suspense>
        <MainMoveTrailer />
      </Suspense>
    </div>
  );
}

export default Browse;
