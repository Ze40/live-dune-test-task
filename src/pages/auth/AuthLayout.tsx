import { useEffect, useState } from "react";

import { Outlet, useLocation } from "react-router";

import { AuthHeader } from "@/widgets";

export const AuthLayout = () => {
  const location = useLocation();
  const [type, setType] = useState<string>("");

  useEffect(() => {
    const newType = location.pathname.split("/").at(-1) || "empty";
    setType(newType);
  }, [location]);

  return (
    <>
      <AuthHeader type={type} />
      <Outlet />
    </>
  );
};
