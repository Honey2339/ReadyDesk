import React from "react";

interface ButtonProps {
  name: string;
  link: string;
}

export default function BorderButton({ name, link }: ButtonProps) {
  return (
    <a href={`${link}`}>
      <button className="relative inline-flex h-12 overflow-hidden p-[1px] hover:outline-none hover:ring-1 hover:ring-slate-800 hover:ring-offset-1 hover:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {name}
        </span>
      </button>
    </a>
  );
}
