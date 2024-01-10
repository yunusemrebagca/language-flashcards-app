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
}

const useStore = create<cardState>((set) => ({
  currentCount: 0,
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

  console.log(cardGroupName);

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

  const { currentCount, prev, next } = useStore();

  return (
    <>
      <h1 className="text-4xl font-bold mb-8 ">Language Flashcards</h1>
      <div className="flex flex-col gap-4 items-center justify-between w-full max-w-sm mt-8">
        {data ? <Card cardData={data[currentCount]} /> : <CardSkeleton />}

        <div className="flex justify-evenly mt-8 w-full">
          <Button
            variant="outline"
            onClick={() => prev(data ? data.length : 0)}
          >
            Previous
          </Button>
          <AddCard />
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
