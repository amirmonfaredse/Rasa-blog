export default function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="min-w-[120px] h-fit p-1 px-2 text-md flex justify-center cursor-pointer text-ghost-1000 shadow ">
      {children}
    </li>
  );
}
