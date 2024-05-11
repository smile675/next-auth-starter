"use client";

import { signIn } from "next-auth/react";

export const LoginButton = ({ children }: { children: React.ReactNode }) => {
  const onClick = () => {
    signIn();
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
