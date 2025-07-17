"use client";

import { MouseEventHandler, useState } from "react";

function Accordion({
  title = "Default",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  const [openAcc, setOpenAcc] = useState<boolean>(true);
  const onOpenAcc: MouseEventHandler<HTMLDivElement> = () => {
    setOpenAcc(!openAcc);
  };

  return (
    <div className="w-[95%] lg:w-full flex flex-col">
      <div
        style={{ borderColor: openAcc && "white" }}
        onClick={onOpenAcc}
        className="w-full h-14 flex items-center justify-start gap-2 px-2 md:px-10 rounded-lg border-4 border-avocado-100 text-avocado-900 group cursor-pointer hover:border-avocado-500 duration-300"
      >
        <h1>{title}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 group-hover:translate-y-1 duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      {openAcc && children}
    </div>
  );
}

export default Accordion;
