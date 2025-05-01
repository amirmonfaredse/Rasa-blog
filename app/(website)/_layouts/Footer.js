import IconImage from "../_components/IconImage";

export function Li({ children }) {
  return (
    <li className="h-fit p-1 px-2 text-sm flex justify-center cursor-pointer text-ghost-1000 shadow ">
      {children}
    </li>
  );
}

export default function Footer() {
  return (
    <div className="w-full h-64 flex flex-col md:flex-row shadow-inner">
      <div className="w-1/3 h-full flex justify-evenly items-center">
        <ul className="flex flex-col px-10 gap-2">
          <h1 className="text-md mb-3 mr-5 cursor-default">لینک های مفید</h1>
          <Li>صفحه اصلی</Li>
          <Li>بلاگ</Li>
          <Li>درباره ما</Li>
          <Li>تماس با ما</Li>
        </ul>
        <ul className="flex flex-col px-10 gap-2">
          <h1 className="text-md mb-3 mr-5 cursor-default">برچسب های محبوب</h1>
          <Li>برنامه نویسی</Li>
          <Li>طراحی سایت</Li>
          <Li>سرگرمی</Li>
          <Li>طراحی</Li>
        </ul>
      </div>
      <div className="w-1/3 h-full flex flex-col gap-7 items-center justify-center">
        <h1 className="text-xl">ما را در شبکه های اجتماعی دنبال کنید</h1>
        <div className="w-full h-fit flex flex-wrap gap-5 items-center justify-center">
          <IconImage
            width={60}
            height={60}
            src="/header/social/instagram.svg"
            alt="لینک ورود به اینستاگرام رسا"
          />
          <IconImage
            width={60}
            height={60}
            src="/header/social/linkedin.svg"
            alt="لینک ورود به اینستاگرام رسا"
          />
          <IconImage
            width={60}
            height={60}
            src="/header/social/whatsup.svg"
            alt="لینک ورود به اینستاگرام رسا"
          />
          <IconImage
            width={60}
            height={60}
            src="/header/social/youtube.svg"
            alt="لینک ورود به اینستاگرام رسا"
          />
        </div>
      </div>
      <div className="w-1/3 h-full flex justify-start items-center">
        <ul className="flex flex-col px-10 gap-5">
          <h1 className="text-md mb-3 mr-5 cursor-default">اطلاعات تماس : </h1>
          <Li>شماره تماس  : 09220395434 - 09300436553</Li>
          <Li>آدرس : اصفهان خیابان سروش روبه روی مسجد الغفور</Li>
        </ul>
        
      </div>
    </div>
  );
}
