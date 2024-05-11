"use client";

import { useSession } from "next-auth/react";
import { LoginButton } from "./loginButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { LogoutButton } from "./logoutButton";

export const UserButton = () => {
  const { data: session } = useSession();
  const user = session?.user;
  if (!user) {
    return <LoginButton>Login</LoginButton>;
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="cursor-pointer">
          <AvatarImage
            src={user.image || ""}
            height={32}
            width={32}
            className="rounded-full"
          />
          <AvatarFallback>
            <User />
          </AvatarFallback>
        </Avatar>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <p>Hi, {user.name}</p>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogoutButton>Log out</LogoutButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};
