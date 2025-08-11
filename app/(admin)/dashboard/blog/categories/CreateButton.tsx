export default function CreateButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      // disabled={}
      className="w-full bg-folly-900 text-white mt-5 p-2 rounded"
    >
      {children}
    </button>
  );
}
