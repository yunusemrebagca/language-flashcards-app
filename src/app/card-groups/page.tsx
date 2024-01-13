"use client";

import { Button } from "@/components/ui/button";
import { useLanguageCardSets } from "@/services/queries";
import CardGroup from "@/components/CardGroup";
import { useSearchParams } from "next/navigation";
import CardSet from "@/components/CardSet";
import { useAddCardSet } from "@/services/mutations";
import AddCardSet from "@/components/AddCardSet";
export default function Page() {
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
    <main className="flex-1 flex  flex-col my-16 sm:my-16 items-center justify-center">
      <h1 className="sm:text-3xl text-2xl font-bold mb-4 sm:mb-8">
        Card Groups
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-4xl p-8">
        {cardSets
          ? cardSets?.map((cardSet) => (
              <CardGroup key={cardSet.id} cardSet={cardSet} />
            ))
          : null}
        <div className="rounded-lg shadow-md bg-gray-200 dark:bg-gray-700 py-10 flex items-center justify-center">
          <AddCardSet />
        </div>
      </div>
      <div className="flex items-center justify-between w-full max-w-md mt-8 px-4">
        <Button variant="outline">Previous</Button>
        <Button variant="outline">Next</Button>
      </div>
    </main>
  );
}
