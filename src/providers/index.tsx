"use client";
import React, { createContext, useState } from "react";

type User = {
  id: string;
  firstName: string;
  age: string;
  email: string;
  gender: string;
};

type Props = {
  children: any;
  initialUsers: User[],
}

type UserContextType = [User[], (users: User[]) => void];

export const UsersContext = createContext<UserContextType>([[], () => {}]);

export default function UsersProvider({ children, initialUsers }: Props) {
  const [users, setUsers] = useState(initialUsers);
  return (
    <UsersContext.Provider value={[users, setUsers]}>
      {children}
    </UsersContext.Provider>
  );
}
