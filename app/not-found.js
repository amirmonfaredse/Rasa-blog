import Link from "next/link";

export default function Notfound() {
  return (
    <div>
      صفحه مورد نظر پیدا نشد!
      <Link href="/">برگشت به صفحه اصلی</Link>
    </div>
  );
}
