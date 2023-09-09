import type { V2_MetaFunction } from "@remix-run/react";
import { Outlet } from "@remix-run/react";

export const meta: V2_MetaFunction = () => [{ title: "New Remix App" }];

export default function SignUp() {
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <Outlet />
    </main>
  );
}
