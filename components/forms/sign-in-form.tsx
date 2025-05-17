"use client";
import React, { useActionState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { signIn } from "@/lib/actions";

function SignInForm() {
  const [state, sighnInUser, pending] = useActionState(signIn, null);
  return (
    <form
      action={sighnInUser}
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
        disabled={pending}
        className=" -mt-3 py-5 w-full rounded-xs bg-red-600 text-lg font-bold hover:brightness-80 hover:text-white"
      >
        <span>Sign In</span>
      </Button>
    </form>
  );
}

export default SignInForm;
