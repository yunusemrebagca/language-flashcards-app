import { languageCard } from "@/types/api";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useAddSaved, useAddLiked } from "@/services/mutations";

export default function Card({ cardData }: { cardData: languageCard }) {
  const [isFlipped, setIsFlipped] = useState(true);

  const useAddSavedMutation = useAddSaved();

  const useAddLikedMutation = useAddLiked();

  const { variables: variablesSaved } = useAddSavedMutation;

  const { variables: variablesLiked } = useAddLikedMutation;

  return (
    <div className="group h-64 w-full [perspective:1000px]">
      <div
        className={cn(
          " relative h-full bg-white w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]",
          {
            "[transform:rotateY(-180deg)]": isFlipped,
          }
        )}
      >
        <div className="flex flex-col justify-between  items-center h-full w-full scale-x-[-1]">
          <div className="flex flex-col justify-between py-16 items-center h-full w-full">
            <div className="flex flex-col mb-8 justify-center items-center">
              <h2 className="text-2xl font-bold mb-4">{cardData.word}</h2>
            </div>
            <div className="flex items-center justify-center space-x-4">
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
            <div className="flex items-center justify-center space-x-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
