import SpinnerLoader from "../utility/SpinnerLoader";

export default function Loading() {
  return (
    <div className="w-full h-72 flex items-center justify-center">
      <SpinnerLoader />
    </div>
  );
}
