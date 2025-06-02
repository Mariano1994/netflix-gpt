"use client";
import { signInUser } from "@/lib/actions";
import { CircleX, Loader2 } from "lucide-react";
import { useActionState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function SignInForm() {
  const [state, userSignIn, isPending] = useActionState(signInUser, null);
  return (
    <>
      <div>
        {state?.message && (
          <div className="flex items-center gap-1 mt-2">
            <CircleX className="text-red-500" size={18} />
            <p className="text-red-500 text-sm font-light">{state.message}</p>
          </div>
        )}
      </div>
      <form
        action={userSignIn}
        className="flex flex-col gap-6 items-center mt-4  "
      >
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email address or phone number"
          className="py-7 rounded-xs"
        />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="py-7 rounded-xs"
        />
        <Button
          disabled={isPending}
          className=" -mt-3 py-5 w-full rounded-xs bg-red-600 text-lg font-bold hover:brightness-80 hover:text-white"
        >
          {isPending ? <Loader2 className="animate-spin" /> : "Sign In"}
        </Button>
      </form>
    </>
  );
}

export default SignInForm;
