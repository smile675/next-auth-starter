import React from "react";
import { UserButton } from "../auth/userButton";

const NavBar = () => {
  return (
    <div className="w-full bg-secondary shadow-md min-h-16 flex items-center">
      <div className="max-w-screen-xl xl:w-full mx-auto flex justify-between items-center">
        <div>Nav Buttons</div>
        <UserButton />
      </div>
    </div>
  );
};

export default NavBar;
