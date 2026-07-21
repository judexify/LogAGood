"use client";

import { createContext, ReactNode, useContext, useMemo } from "react";

type UserContextType = {
  id: string;
  full_name: string;
  role: string;
  email: string;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

function UserProvider({
  children,
  user,
}: {
  children: ReactNode;
  user: UserContextType;
}) {
  const { id, full_name, role, email } = user;

  const value = useMemo(() => ({ id, full_name, role, email }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUser() {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error("Context was used outside provider");

  return context;
}

export { UserProvider, useUser };
