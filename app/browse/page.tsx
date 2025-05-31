import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function Browse() {
  const session = await auth();

  {
    if (!session) {
      redirect("/sign-in");
    }
  }

  return (
    <div>
      <span>Move List</span>
    </div>
  );
}

export default Browse;
