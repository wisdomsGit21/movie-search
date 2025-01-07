import { GridPattern } from "./ui/grid-pattern";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";

export default function BaseLayout() {
  return (
    <main className="  overflow-hidden rounded-lg min-h-screen bg-background lg:p-20 ">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter mt-6 text-black">
        Search for a Movie
      </p>
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
      <Outlet />
    </main>
  );
}
