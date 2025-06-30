import IconImage from "../_components/IconImage";
import Li from "./utilities/Li";

export default function Footer() {
  return (
    <div className="w-full h-fit lg:h-64 flex flex-col lg:flex-row shadow-inner gap-5 lg:gap-0">
      <div className="w-full lg:w-1/3 h-fit lg:h-full flex flex-col lg:flex-row justify-evenly items-start lg:items-center py-5 lg:py-0">
        <ul className="w-full flex flex-col items-center  justify-start px-2 lg:px-10 mb-12 lg:mb-0 gap-2">
          <h1 className="text-md mb-3 lg:mr-5 cursor-default">لینک های مفید</h1>
          <Li>صفحه اصلی</Li>
          <Li>بلاگ</Li>
          <Li>درباره ما</Li>
          <Li>تماس با ما</Li>
        </ul>
        <ul className="w-full flex flex-col items-center  justify-start px-2 lg:px-10 mb-12 lg:mb-0 gap-2">
          <h1 className="text-md mb-3 mr-5 cursor-default">برچسب های محبوب</h1>
          <Li>برنامه نویسی</Li>
          <Li>طراحی سایت</Li>
          <Li>سرگرمی</Li>
          <Li>طراحی</Li>
        </ul>
      </div>
      <div className="w-full lg:w-1/3 h-fit lg:h-full flex flex-col gap-7 items-center justify-center">
        <h1 className="text-md lg:text-xl px-2 lg:px-0">
          ما را در شبکه های اجتماعی دنبال کنید
        </h1>
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
            src="/header/social/telegram.svg"
            alt="لینک ورود به اینستاگرام رسا"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/3 h-fit lg:h-full flex justify-start items-center mb-16 lg:mb-0">
        <ul className="w-full flex flex-col p-5 lg:px-10 gap-5">
          <h1 className="text-md  m-4 lg:mb-3 lg:mr-5 cursor-default">
            اطلاعات تماس :{" "}
          </h1>
          <Li>شماره تماس : 09220395434 - 09300436553</Li>
          <Li>آدرس : اصفهان خیابان سروش روبه روی مسجد الغفور</Li>
        </ul>
      </div>
    </div>
  );
}
