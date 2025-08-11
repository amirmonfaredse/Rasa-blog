import { DeviderProps } from "@/types/app/website/types";

export default function Devider({ title, className }: DeviderProps) {
  return (
    <div className={`${className} `}>
      <h1 className="min-w-fit h-16 flex justify-start text-2xl">{title}</h1>
      <div className="w-full h-8 flex items-end border-t-2 border-red-700 "></div>
    </div>
  );
}
