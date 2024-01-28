import React from "react";

interface ButtonProp {
  name: string;
  link: string;
}

export default function ShimmerButton({ name, link }: ButtonProp) {
  return (
    <a href={`${link}`}>
      <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors hover:outline-none hover:ring-1 hover:ring-slate-800 hover:ring-offset-1 hover:ring-offset-slate-50 ">
        {name}
      </button>
    </a>
  );
}
