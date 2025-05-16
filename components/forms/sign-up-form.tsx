import { Input } from "../ui/input";
import { Button } from "../ui/button";
function SignUpForm() {
  return (
    <form action="" className="flex flex-col gap-6 items-center mt-4  ">
      <Input type="text" placeholder="Name" className="py-7 rounded-xs" />

      <Input
        type="number"
        placeholder="Phone number"
        className="py-7 rounded-xs"
      />

      <Input
        type="email"
        placeholder="Email address"
        className="py-7 rounded-xs"
      />
      <Input
        type="password"
        placeholder="Password"
        className="py-7 rounded-xs"
      />
      <Button className=" -mt-3 py-5 w-full rounded-xs bg-red-600 text-lg font-bold hover:brightness-80 hover:text-white">
        <span>Create account</span>
      </Button>
    </form>
  );
}

export default SignUpForm;
