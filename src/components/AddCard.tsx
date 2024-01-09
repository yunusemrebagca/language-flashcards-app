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
export default function AddCard() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Flashcard</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
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
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add Flashcard</Button>
          <DialogClose asChild>
            <div>
              <Button variant="outline">Cancel</Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
