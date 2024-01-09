import Image from "next/image";
import { Button } from "@/components/ui/button";
import CardSet from "@/components/CardSet";

export default function Home() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center">
        <CardSet />
      </main>
    </>
  );
}
