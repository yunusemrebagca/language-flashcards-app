import { Button } from "@/components/ui/button";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { useForm, SubmitHandler } from "react-hook-form";
import { useAddCard } from "@/services/mutations";

type Inputs = {
  word: string;
  description: string;
  set: string;
};

export default function AddCard({ cardGroup }: { cardGroup: string }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const addCardHook = useAddCard();
  const { isPending, isSuccess } = addCardHook;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    addCardHook.mutate({
      word: data.word,
      description: data.description,
      set: cardGroup,
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Flashcard</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Add Flashcard</DialogTitle>
            <DialogDescription>
              Create a new flashcard for your language learning.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="frontSide">
                Front Side
              </Label>
              <Input
                className="col-span-3"
                id="frontSide"
                placeholder="Enter text for the front side"
                {...register("word")}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="backSide">
                Back Side
              </Label>
              <Input
                className="col-span-3"
                id="backSide"
                placeholder="Enter text for the back side"
                {...register("description")}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isPending}>
              Add Flashcard
            </Button>
            <DialogClose asChild>
              <div>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </div>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
