import { auth } from "@/auth";
import MainMoveTrailer from "@/components/main-move-triller";
import { MoveisListRecomendation } from "@/components/moveis-list-recomendation";
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
    <>
      <div className=" h-screen w-full ">
        <Suspense>
          <MainMoveTrailer />
        </Suspense>
      </div>

      <MoveisListRecomendation />
    </>
  );
}

export default Browse;
