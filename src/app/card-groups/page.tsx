import { Button } from "@/components/ui/button";
export default function page() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Card Groups</h1>
      <div className="grid grid-cols-4 gap-8 w-full max-w-4xl p-8">
        <div className="rounded-lg shadow-md bg-white dark:bg-gray-800">
          <div className="flex flex-col items-center justify-center space-y-4 p-8">
            <h2 className="text-2xl font-bold">Group 1</h2>
            <div className="flex items-center justify-center space-x-4">
              <Button variant="outline">View Group</Button>
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow-md bg-white dark:bg-gray-800">
          <div className="flex flex-col items-center justify-center space-y-4 p-8">
            <h2 className="text-2xl font-bold">Group 2</h2>
            <div className="flex items-center justify-center space-x-4">
              <Button variant="outline">View Group</Button>
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow-md bg-white dark:bg-gray-800">
          <div className="flex flex-col items-center justify-center space-y-4 p-8">
            <h2 className="text-2xl font-bold">Group 3</h2>
            <div className="flex items-center justify-center space-x-4">
              <Button variant="outline">View Group</Button>
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow-md bg-white dark:bg-gray-800">
          <div className="flex flex-col items-center justify-center space-y-4 p-8">
            <h2 className="text-2xl font-bold">Group 4</h2>
            <div className="flex items-center justify-center space-x-4">
              <Button variant="outline">View Group</Button>
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow-md bg-white dark:bg-gray-800">
          <div className="flex flex-col items-center justify-center space-y-4 p-8">
            <h2 className="text-2xl font-bold">Group 5</h2>
            <div className="flex items-center justify-center space-x-4">
              <Button variant="outline">View Group</Button>
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow-md bg-gray-200 dark:bg-gray-700 py-10 flex items-center justify-center">
          <Button className="p-8 " variant="outline">
            Add Group
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between w-full max-w-md mt-8">
        <Button variant="outline">Previous</Button>
        <Button variant="outline">Next</Button>
      </div>
    </main>
  );
}
