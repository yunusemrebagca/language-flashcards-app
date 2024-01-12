import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "./ui/button";

export default function CardSkeleton() {
  return (
    <div className="group h-64 w-full [perspective:1000px]">
      <div
        className={cn(
          " relative h-full bg-white w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]"
        )}
      >
        <div className="flex flex-col justify-between  items-center h-full w-full">
          <div className="flex flex-col justify-between py-16 items-center h-full w-full">
            <div className="flex flex-col mb-8 justify-center items-center">
              <div className="text-2xl font-bold mb-4 flex gap-4">
                <Skeleton className="w-[100px] h-[20px] rounded-full" />
                <Skeleton className="w-[140px] h-[20px] rounded-full" />
              </div>
              <div className="text-2xl font-bold mb-4 flex gap-4">
                <Skeleton className="w-[140px] h-[20px] rounded-full" />
                <Skeleton className="w-[60px] h-[20px] rounded-full" />
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Button variant="outline">Loading...</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
