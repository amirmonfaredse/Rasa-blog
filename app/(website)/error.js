"use client";
export default function Error({ error, reset }) {
  return (
    <div>
      <p> مشکلی پیش آمده است</p>
      <p>{error.message}</p>
      <button onClick={reset}>تلاش مجدد</button>
    </div>
  );
}
