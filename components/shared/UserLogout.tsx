"use client";

import { useUser } from "./UserContext";

function UserLogout() {
  const { full_name, role } = useUser();

  return (
    <div className="flex flex-col">
      <span className="text-brand-neutral ">{full_name.split(" ").pop()}</span>
      <span className="text-brand-lighter-primary">
        {role.toLocaleUpperCase()}
      </span>
    </div>
  );
}

export default UserLogout;
