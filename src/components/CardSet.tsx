"use client";

import { cardSet, languageCard } from "@/types/api";
import Card from "./Card";
import { Button } from "./ui/button";
import {
  useLanguageCardSets,
  useLanguageCards,
  useLanguageCardsById,
  useLanguageCardsIds,
} from "@/services/queries";
import { create } from "zustand";
import AddCard from "../components/AddCard";
import CardSkeleton from "./CardSkeleton";
import { getLanguageCardById } from "@/services/api";
import { useSearchParams } from "next/navigation";
import parameterize from "parameterize-js";
import { useEffect } from "react";

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

  const languageCardSets = useLanguageCardSets().data;
  const cardSet = languageCardSets?.filter(
    (cardSet) => cardSet.card_set === cardGroupName
  );

  const setName =
    cardGroup === "liked"
      ? "Liked Cards"
      : cardGroup === "saved"
      ? "Saved Cards"
      : cardSet && cardSet[0] && cardSet[0].card_set_name
      ? cardSet[0].card_set_name
      : "All Flashcards";

  const { currentCount, prev, next, setCurrentCount } = useCardStore();

  useEffect(() => {
    if (data && data[currentCount] && currentCount >= data.length - 1) {
      setCurrentCount(data.length - 1);
    } else {
      setCurrentCount(0);
    }
  }, []);

  return (
    <>
      <h1 className="sm:text-3xl text-2xl font-bold mb-4 ">{setName}</h1>
      <div className="flex flex-col gap-4 items-center justify-between w-full max-w-sm mt-4">
        {data && data[currentCount] ? (
          <Card cardData={data[currentCount]} setLength={data.length} />
        ) : (
          <>
            {data && data.length === 0 ? null : <CardSkeleton />}
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
