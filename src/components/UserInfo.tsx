"use client";

import { User } from "@/types/user";
import { signOut } from "next-auth/react";
import { redirect } from 'next/navigation';

type UserInfoProps = {
  user: User;
}

export default function UserInfo({ user }: UserInfoProps) {
  const handleLogout = async () => {
    await signOut({callbackUrl: '/'});
  }

  return(
	  <div className="rounded-lg border shadow-lg ">
      <button className="font-medium p-3 text-blue-600 hover:underline" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}