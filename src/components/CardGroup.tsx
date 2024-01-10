import { Button } from "./ui/button";
import { cardSet } from "@/types/api";
import Link from "next/link";
export default function CardGroup({ cardSet }: { cardSet: cardSet }) {
  return (
    <div className="rounded-lg shadow-md bg-white dark:bg-gray-800">
      <div className="flex flex-col items-center justify-center space-y-4 p-8">
        <h2 className="text-2xl font-bold">{cardSet.card_set} </h2>
        <div className="flex items-center justify-center space-x-4">
          <Link href={`/card-groups?card-group=${cardSet.card_set}`}>
            <Button variant="outline">View Group</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
