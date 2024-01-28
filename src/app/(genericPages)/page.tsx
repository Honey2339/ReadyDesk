import Navbar from "@/components/ui/navbar";
import SparklesCore from "@/components/ui/sparkles";
import ShimmerButton from "@/components/ui/shimmerbtn";
import { Space_Grotesk } from "next/font/google";
import { cn } from "@/utils/cn";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  return (
    <div>
      <div className="absolute top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1
          className={cn(
            spaceGrotesk.className,
            "z-20 md:text-3xl sm:text-xl lg:text-5xl max-w-2xl text-center font-bold text-zinc-200"
          )}
        >
          Streamline Your Support with Our{" "}
          <span className="text-lime-400 underline">Helpdesk</span> Solution
        </h1>
        <p className="text-center mt-5 text-zinc-400 sm:text-sm md:text-base lg:text-lg">
          Elevate customer satisfaction with seamless issue resolution.
        </p>
        <p className="text-center text-zinc-400 sm:text-sm md:text-base lg:text-lg">
          One place to handle all your tickets.
        </p>
        <div className="flex justify-center mt-5 gap-5">
          <ShimmerButton name="Start Now!" link="/login" />
          <ShimmerButton name="View Demo" link="/demo" />
        </div>
      </div>
    </div>
  );
}
