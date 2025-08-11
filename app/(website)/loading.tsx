import SpinnerLoaderInitial from "utility/loaders/SpinnerLoaderInitial";

export default function Loading() {
  return (
    <div className="w-full h-72 flex items-center justify-center">
      <SpinnerLoaderInitial />
    </div>
  );
}
