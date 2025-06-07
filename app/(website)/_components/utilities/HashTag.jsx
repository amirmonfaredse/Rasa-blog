export default function HashTag({ children, className }) {
  return (
    <li className="p-2 cursor-pointer">
      <div
        className={`flex justify-center shadow-md p-1.5 px-2  items-center gap-1 rounded-full text-ghost-100 text-xs ${className}`}
      >
        <span className=" text-ghost-100">#</span>
        <p>{children}</p>
      </div>
    </li>
  );
}
