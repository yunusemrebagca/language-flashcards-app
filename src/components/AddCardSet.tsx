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
import { useAddCardSet } from "@/services/mutations";
import parameterize from "parameterize-js";

type Inputs = {
  card_set: string;
};

export default function AddCard() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const addCardSetHook = useAddCardSet();
  const { isPending, isSuccess } = addCardSetHook;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    addCardSetHook.mutate({
      card_set: parameterize(data.card_set),
      card_set_name: data.card_set,
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Card Set</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Add Card Set</DialogTitle>
            <DialogDescription>
              Create a new card set for your language learning.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="frontSide">
                Set Name
              </Label>
              <Input
                className="col-span-3"
                id="frontSide"
                placeholder="Enter text for the front side"
                {...register("card_set")}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isPending}>
              Add Card Set
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
