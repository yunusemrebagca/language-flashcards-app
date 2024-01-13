import { languageCard } from "@/types/api";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useAddSaved, useAddLiked, useDeleteCard } from "@/services/mutations";
import { useCardStore } from "../components/CardSet";

export default function Card({
  cardData,
  setLength,
}: {
  cardData: languageCard;
  setLength: number;
}) {
  const [isFlipped, setIsFlipped] = useState(true);

  const useAddSavedMutation = useAddSaved();

  const useAddLikedMutation = useAddLiked();

  const useDeleteCardMutation = useDeleteCard();

  const { setCurrentCount } = useCardStore();

  return (
    <div className="group h-64 w-full [perspective:1000px]">
      <div
        className={cn(
          " relative h-full bg-white sm:w-full rounded-xl shadow-xl mx-auto w-[96%] transition-all duration-500 [transform-style:preserve-3d]",
          {
            "[transform:rotateY(-180deg)]": isFlipped,
          }
        )}
      >
        <div className="flex flex-col justify-between  items-center h-full w-full scale-x-[-1]">
          <div className="flex flex-col justify-between py-16 items-center h-full w-full">
            <div className="flex flex-col mb-8 justify-center items-center">
              <h2 className="sm:text-2xl text-xl font-bold mb-4">
                {cardData.word}
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-0 sm:flex sm:items-center sm:justify-center  sm:space-x-4 ">
              <Button
                onClick={() => setIsFlipped(!isFlipped)}
                variant="outline"
                size={"card"}
              >
                Reveal
              </Button>
              <Button
                onClick={() =>
                  useAddSavedMutation.mutate({
                    id: cardData.id,
                    saved: !cardData.saved,
                  })
                }
                variant={cardData.saved ? "saved" : "outline"}
                size={"card"}
              >
                {cardData.saved ? "Saved" : "Save"}
              </Button>
              <Button
                onClick={() =>
                  useAddLikedMutation.mutate({
                    id: cardData.id,
                    liked: !cardData.liked,
                  })
                }
                size={"card"}
                variant={cardData.liked ? "destructive" : "outline"}
              >
                {cardData.liked ? "Liked" : "Like"}
              </Button>
              <Button
                onClick={() => {
                  if (setLength > 2) {
                    setCurrentCount(setLength - 2);
                  } else {
                    setCurrentCount(0);
                  }
                  useDeleteCardMutation.mutate(cardData.id);
                }}
                disabled={useDeleteCardMutation.isPending}
                size={"card"}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 h-full w-full rounded-xl bg-white px-12 text-center [backface-visibility:hidden]">
          <div className="flex flex-col justify-between py-16 items-center h-full w-full">
            <div className="flex flex-col mb-8 justify-center items-center">
              <h2 className="text-2xl font-bold mb-4">
                {cardData.description}
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-0 sm:flex sm:items-center sm:justify-center space-x-2 sm:space-x-4 ">
              <Button
                onClick={() => setIsFlipped(!isFlipped)}
                variant="outline"
              >
                Reveal
              </Button>
              <Button
                onClick={() =>
                  useAddSavedMutation.mutate({
                    id: cardData.id,
                    saved: !cardData.saved,
                  })
                }
                variant={cardData.saved ? "saved" : "outline"}
              >
                {cardData.saved ? "Saved" : "Save"}
              </Button>
              <Button
                onClick={() =>
                  useAddLikedMutation.mutate({
                    id: cardData.id,
                    liked: !cardData.liked,
                  })
                }
                variant={cardData.liked ? "destructive" : "outline"}
              >
                {cardData.liked ? "Liked" : "Like"}
              </Button>
              <Button
                onClick={() => {
                  if (setLength > 2) {
                    setCurrentCount(setLength - 2);
                  } else {
                    setCurrentCount(0);
                  }
                  useDeleteCardMutation.mutate(cardData.id);
                }}
                disabled={useDeleteCardMutation.isPending}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
