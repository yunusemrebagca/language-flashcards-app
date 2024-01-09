"use client";

import { languageCard } from "@/types/api";
import Card from "./Card";
import { Button } from "./ui/button";
import { useLanguageCards } from "@/services/queries";
import { create } from "zustand";
import AddCard from "../components/AddCard";
import CardSkeleton from "./CardSkeleton";

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

export default function CardSet() {
  const { data, error, isLoading, isSuccess } = useLanguageCards();

  const likedCards = data?.filter((card) => card.liked == true);
  const savedCards = data?.filter((card) => card.saved == true);

  console.log(likedCards, savedCards);

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
