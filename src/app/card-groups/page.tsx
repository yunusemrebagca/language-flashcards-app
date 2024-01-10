"use client";

import { Button } from "@/components/ui/button";
import { useLanguageCardSets } from "@/services/queries";
import CardGroup from "@/components/CardGroup";
import { useSearchParams } from "next/navigation";
import CardSet from "@/components/CardSet";
export default function page() {
  const cardSets = useLanguageCardSets().data;
  const params = useSearchParams().get("card-group");
  const isSearchParamEmpty = !params || params.trim() === "";
  if (!isSearchParamEmpty) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center">
        <CardSet cardGroupName={params} />
      </main>
    );
  }

  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Card Groups</h1>
      <div className="grid grid-cols-4 gap-8 w-full max-w-4xl p-8">
        {cardSets
          ? cardSets?.map((cardSet) => (
              <CardGroup key={cardSet.id} cardSet={cardSet} />
            ))
          : null}
        <div className="rounded-lg shadow-md bg-gray-200 dark:bg-gray-700 py-10 flex items-center justify-center">
          <Button className="p-8 " variant="outline">
            Add Group
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between w-full max-w-md mt-8">
        <Button variant="outline">Previous</Button>
        <Button variant="outline">Next</Button>
      </div>
    </main>
  );
}
