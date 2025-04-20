export default function Loading() {
  return (
    <div className="w-full h-full flex justify-between">
      <div className="w-[25%] h-[300px] rounded-lg p-2 mb-10 bg-gray-700  transition animate-pulse duration-75"></div>
      <div className="w-[70%]">
        <div className="w-full  h-[350px] rounded-lg p-2 mb-10 bg-gray-700  transition animate-pulse duration-75"></div>
        <div className="w-full h-[350px] rounded-lg p-2 mb-10 bg-gray-700  transition animate-pulse duration-75"></div>
      </div>
    </div>
  );
}
