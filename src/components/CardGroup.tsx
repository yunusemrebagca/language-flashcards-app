import { useDeleteCardSet } from "@/services/mutations";
import { Button } from "./ui/button";
import { cardSet } from "@/types/api";
import Link from "next/link";
import parameterize from "parameterize-js";

export default function CardGroup({ cardSet }: { cardSet: cardSet }) {
  const useDeleteCardSetMutation = useDeleteCardSet();
  return (
    <div className="rounded-lg shadow-md bg-white dark:bg-gray-800">
      <div className="flex flex-col h-full w-full items-left justify-between space-y-4 p-8">
        <h2 className="text-xl font-bold text-center">
          {cardSet.card_set_name}{" "}
        </h2>
        <div className="flex items-center justify-center space-x-4">
          <div className="flex flex-col gap-2">
            <Link href={`/card-groups?card-group=${cardSet.card_set}`}>
              <Button variant="outline" size="sm" className="w-full">
                View Group
              </Button>
            </Link>
            <Button
              onClick={(e) => {
                useDeleteCardSetMutation.mutate({ id: cardSet.id });
              }}
              variant="destructive"
              className="w-full"
              disabled={useDeleteCardSetMutation.isPending}
              size="sm"
            >
              Delete Group
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
