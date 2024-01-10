import { Button } from "./ui/button";
import Link from "next/link";
export default function SideNav() {
  return (
    <aside className="w-64 bg-white flex flex-col justify-between dark:bg-gray-800 p-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <ul className="space-y-4">
          <li>
            <Link href={"/"}>
              <Button className="w-full" variant="outline">
                Home
              </Button>
            </Link>
          </li>
          <li>
            <Link href={"/?card-group=liked"}>
              <Button className="w-full" variant="outline">
                Liked Cards
              </Button>
            </Link>
          </li>
          <li>
            <Link href={"/card-groups"}>
              <Button className="w-full" variant="outline">
                Card Groups
              </Button>
            </Link>
          </li>

          <li>
            <Link href={"/?card-group=saved"}>
              <Button className="w-full" variant="outline">
                Saved Cards
              </Button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between mb-8">
        <img
          alt="User Avatar"
          className="rounded-full h-12 w-12"
          height="50"
          src="/next.svg"
          style={{
            aspectRatio: "50/50",
            objectFit: "cover",
          }}
          width="50"
        />
        <Button variant="outline">Login</Button>
      </div>
    </aside>
  );
}
