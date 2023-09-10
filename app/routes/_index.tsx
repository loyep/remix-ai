import type { V2_MetaFunction } from "@remix-run/react";
import { Button } from "~/client/components/ui/button";

export const meta: V2_MetaFunction = () => [
  { title: "New Remix App" },
  {
    name: "description",
    content: "Remix AI",
  },
];

export default function Index() {
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <Button>Get Started</Button>
    </main>
  );
}
