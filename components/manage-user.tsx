import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { auth } from "@/auth";
import {
  ChevronDown,
  CircleHelp,
  LogOutIcon,
  UserPen,
  UserRound,
} from "lucide-react";
import Image from "next/image";

import Form from "next/form";
import { Logout } from "@/lib/actions";
import { AvatarUserImage } from "@/lib/contants";
import Link from "next/link";

export async function ManageUser() {
  const session = await auth();

  const user = session?.user;
  return (
    <div className="flex items-center gap-2">
      <div>
        <Link href="/browse/gpt-recomendations">GPT RECOMENDATIONS</Link>
      </div>
      <div className="mb-1">
        <Image src={AvatarUserImage} alt="avatar image" className="rounded" />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="hover:cursor-pointer">
            <ChevronDown size={18} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <div className="flex items-center gap-2">
                <UserPen />
                <span>Manage Profile</span>
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <div className="flex items-center gap-2">
                <UserRound />
                <span>Account</span>
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <div className="flex items-center gap-2">
                <CircleHelp />
                <span>Help</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Form action={Logout}>
              <button className="flex items-center text-red-400 gap-2 hover:cursor-pointer">
                <LogOutIcon className="text-red-400 font-semibold" />
                Sing out of Netflix
              </button>
            </Form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
