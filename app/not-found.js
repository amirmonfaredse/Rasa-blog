import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <html>
      <body>
        <div
          style={{
            color: "#1F2937",
            width: "100%",
            minHeight: "90vh",
            overflow: "hidden",
            padding: "0px",
            margin: "0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/svg/error.svg"
            alt="با خطا مواجه شده اید"
            width={100}
            height={100}
          />
          <p style={{ color: "#1F2937" }}>صفحه مورد نظر وجود ندارد</p>
          <div className="flex gap-5">
            <Link
              href="/blogs"
              style={{
                color: "#1F2937",
                textDecoration: "none",
                margin: "0px 10px",
              }}
            >
              بازگشت به وبلاگ
            </Link>
            <Link
              href="/"
              style={{
                color: "#1F2937",
                textDecoration: "none",
                margin: "0px 10px",
              }}
            >
              بازگشت به خانه
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
