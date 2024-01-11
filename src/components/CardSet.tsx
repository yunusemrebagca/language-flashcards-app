"use client";

import { cardSet, languageCard } from "@/types/api";
import Card from "./Card";
import { Button } from "./ui/button";
import {
  useLanguageCards,
  useLanguageCardsById,
  useLanguageCardsIds,
} from "@/services/queries";
import { create } from "zustand";
import AddCard from "../components/AddCard";
import CardSkeleton from "./CardSkeleton";
import { getLanguageCardById } from "@/services/api";
import { useSearchParams } from "next/navigation";

interface cardState {
  currentCount: number;
  next: (length: number) => void;
  prev: (length: number) => void;
  setCurrentCount: (count: number) => void;
}

export const useCardStore = create<cardState>((set) => ({
  currentCount: 0,
  setCurrentCount: (count) => set({ currentCount: count }),
  next: (length) =>
    set((state) => {
      if (state.currentCount === length - 1) {
        return { currentCount: 0 };
      }
      return { currentCount: state.currentCount + 1 };
    }),
  prev: (length) =>
    set((state) => {
      if (state.currentCount === 0) {
        return { currentCount: length - 1 };
      }
      return { currentCount: state.currentCount - 1 };
    }),
}));

export default function CardSet({ cardGroupName }: { cardGroupName?: string }) {
  const {
    data: languageCardsRawData,
    error,
    isLoading,
    isSuccess,
  } = useLanguageCards();

  const likedCards = languageCardsRawData?.filter((card) => card.liked == true);
  const savedCards = languageCardsRawData?.filter((card) => card.saved == true);
  const cardGroups = languageCardsRawData?.filter(
    (card) => card.set_name === cardGroupName
  );

  const params = useSearchParams();

  const cardGroup = params.get("card-group");

  const data =
    cardGroup === "liked"
      ? likedCards
      : cardGroup === "saved"
      ? savedCards
      : cardGroupName
      ? cardGroups
      : languageCardsRawData;

  const { currentCount, prev, next } = useCardStore();

  return (
    <>
      <h1 className="text-3xl font-bold mb-4 ">
        {data === languageCardsRawData ? "All Flashcards" : cardGroup}
      </h1>
      <div className="flex flex-col gap-4 items-center justify-between w-full max-w-sm mt-4">
        {data && data[currentCount] ? (
          <Card cardData={data[currentCount]} setLength={data.length} />
        ) : (
          <>
            <CardSkeleton />{" "}
            {data && data.length === 0 && (
              <>
                <h4 className="text-red-400 text-xl">
                  There is no card remaining.
                </h4>
                {cardGroupName ? (
                  <p className="text-black text-center">
                    You can add new card from below button.
                  </p>
                ) : (
                  <p className="text-black text-center">
                    You can create new group from the Card Groups tab and add
                    new cards.
                  </p>
                )}
              </>
            )}
          </>
        )}

        <div className="flex justify-evenly mt-4 w-full">
          <Button
            variant="outline"
            onClick={() => prev(data ? data.length : 0)}
          >
            Previous
          </Button>
          {cardGroupName && cardGroup ? (
            <AddCard cardGroup={cardGroup} />
          ) : null}
          <Button
            variant="outline"
            onClick={() => next(data ? data.length : 0)}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
