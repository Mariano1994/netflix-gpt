"use client";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useActionState } from "react";
import { createAccount } from "@/lib/actions";
import { CircleX, Loader2 } from "lucide-react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
async function SignUpForm() {
  const [state, signUpUser, isPending] = useActionState(createAccount, null);
  const session = await auth();

  {
    if (session) {
      redirect("/browse");
    }
  }
  return (
    <form
      action={signUpUser}
      className="flex flex-col gap-6 items-center mt-4  "
    >
      <div className="w-full">
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className={`py-7 rounded-xs ${
            state?.error.name ? "border-red-500" : ""
          }`}
        />

        {state?.error?.name ? (
          <div className="flex items-center gap-1 mt-2">
            <CircleX className="text-red-500" size={18} />
            <p className="text-red-500 text-sm font-light">
              {state.error.name}
            </p>
          </div>
        ) : null}
      </div>

      <div className="w-full ">
        <Input
          type="number"
          name="phone"
          id="phone"
          placeholder="Phone number"
          className={`py-7 rounded-xs ${
            state?.error?.phone ? "border-red-500" : ""
          }`}
        />

        {state?.error?.phone ? (
          <div className="flex items-center gap-1 mt-2">
            <CircleX className="text-red-500" size={18} />
            <p className="text-red-500 text-sm font-light">
              {state.error.phone}
            </p>
          </div>
        ) : null}
      </div>

      <div className="w-full">
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          className={`py-7 rounded-xs ${
            state?.error?.email ? "border-red-500" : ""
          }`}
        />

        {state?.error?.email ? (
          <div className="flex items-center gap-1 mt-2">
            <CircleX className="text-red-500" size={18} />
            <p className="text-red-500 text-sm font-light">
              {state.error.email}
            </p>
          </div>
        ) : null}
      </div>

      <div className="w-full">
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className={`py-7 rounded-xs ${
            state?.error?.password ? "border-red-500" : ""
          }`}
        />

        {state?.error?.password ? (
          <div className="flex items-center gap-1 mt-2">
            <CircleX className="text-red-500" size={18} />
            <p className="text-red-500 text-sm font-light">
              {state.error.password}
            </p>
          </div>
        ) : null}
      </div>
      <Button
        disabled={isPending}
        className=" -mt-3 py-5 w-full rounded-xs bg-red-600 text-lg font-bold hover:brightness-80 hover:text-white"
      >
        {isPending ? (
          <Loader2 size={32} className="animate-spin text-white " />
        ) : (
          <span>Create account</span>
        )}
      </Button>
    </form>
  );
}

export default SignUpForm;
