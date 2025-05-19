import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function GetStartForm() {
  return (
    <div>
      <span className="text-base text-white tracking-wide mt-6">
        {" "}
        Ready to watch? Enter your email to create or restart your membership
      </span>
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
  );
}

export default GetStartForm;
