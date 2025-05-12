import Image from "next/image";
import {
  ColHead,
  ColInfo,
  Container,
  FooterPostContainer,
  LiTag,
  ParagraphContainer,
  Reaction,
} from "./utilities/utilities";
import ShareSvg from "./svg/ShareSvg";
import SaveSvg from "./svg/SaveSvg";
import HeartSvg from "./svg/HeartSvg";

export function HeaderCard({ children, className }) {
  return <div className={`${className}`}>{children}</div>;
}
export function MainCard({ children, className }) {
  return (
    <div style={{ backgroundColor: `#BEDBED${50}` }} className={`${className}`}>
      {children}
    </div>
  );
}

export default function PostCard({
  title,
  author,
  created_at,
  image,
  content,
}) {
  return (
    <article className="w-full h-fit sm:h-fit min-h-[500px] sm:flex-row border-ghost-800 rounded-3xl sm:rounded-[50px] overflow-hidden">
      <Container className="w-full h-full flex flex-col items-center justify-between gap-1">
        <HeaderCard className="w-full h-2/5 sm:h-fit sm:p-3 flex flex-col sm:flex-row relative bg-cles-100">
          <ColHead className="w-full sm:w-2/6 lg:w-1/6 h-[200px] sm:h-[130px] relative">
            <Image
              className="object-contain p-4 sm:p-0"
              fill
              src={image}
              alt="مهم ترین مزیت های کسب و کار انلاین"
            />
          </ColHead>
          <ColHead className="w-full sm:w-3/6 lg:w-4/6 h-fit sm:h-full flex flex-col justify-center items-start   px-3 sm:p-5 ">
            <h1 className="text-2xl sm:text-3xl mb-4 sm:mb-0">{title}</h1>
            <div className="h-fit sm:h-fit flex flex-col sm:flex-row sm:flex-wrap  justify-evenly items-start sm:items gap-2 lg:gap-5 text-xs my-3 sm:my-2 mr-3 sm:mr-0 text-white">
              <ColInfo>
                <span>
                  <Image
                    src="/posts/author.svg"
                    alt="تاریخ"
                    width={11}
                    height={11}
                  />
                </span>
                <p className="pt-1">نویسنده : {author}</p>
              </ColInfo>
              <ColInfo>
                <span>
                  <Image
                    src="/posts/date.svg"
                    alt="تاریخ"
                    width={15}
                    height={15}
                  />
                </span>
                <p className="pt-1">{created_at}</p>
              </ColInfo>
              <ColInfo>
                <span>
                  <Image
                    src="/posts/timeSpend.svg"
                    alt="تاریخ"
                    width={12}
                    height={12}
                  />
                </span>
                <p className="pt-1">8 دقیقه زمان مطالعه</p>
              </ColInfo>
            </div>
          </ColHead>
          <ColHead className="w-full sm:w-1/6 lg:w-1/6 h-[60px] sm:h-full flex sm:flex-col items-center sm:items-end justify-evenly  sm:justify-center  gap-3 sm:pl-8">
            <Reaction className="hover:scale-110">
              <HeartSvg />
            </Reaction>
            <Reaction className="hover:-translate-y-1">
              <SaveSvg />
            </Reaction>
            <Reaction className="hover:-rotate-6">
              <ShareSvg />
            </Reaction>
          </ColHead>
        </HeaderCard>
        <MainCard className="w-full h-4/5 sm:h-fit flex flex-col justify-between">
          <ParagraphContainer className="w-full min-h-[240px] h-[260px] sm:h-2/3 flex justify-center items-start p-3">
            <div className="w-[90%] h-full">
              <p className="w-full h-fit leading-10 line-clamp-6 sm:line-clamp-4 text-justify">
                {content}
              </p>
            </div>
          </ParagraphContainer>
          <FooterPostContainer className="w-full h-1/3 flex flex-col sm:flex-row my-6">
            <div className="w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col sm:flex-row items-center justify-center px-5">
              <ul className="w-full sm:w-2/3 flex items-center justify-center flex-wrap px-5 py-4 sm:py-0 gap-x-2 gap-y-1 ">
                <LiTag className="hover:border-red-800 hover:bg-red-800 hover:text-red-200">
                  سرگرمی
                </LiTag>
                <LiTag className=" hover:border-green-800  hover:bg-green-800 hover:text-green-200">
                  طراحی سایت
                </LiTag>
                <LiTag className=" hover:border-amber-800   hover:bg-amber-800  hover:text-amber-200 ">
                  شبکه های اجتماعی
                </LiTag>
                <LiTag className=" hover:border-yellow-800 cursor-pointer duration-300 hover:bg-yellow-800 hover:text-yellow-200">
                  کسب و کار
                </LiTag>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 h-1/2 sm:h-full flex items-center justify-center my-2 sm:my-0">
              <button className="w-full sm:w-2/3 h-14 bg-blue-950 text-blue-100 rounded-3xl  sm:rounded-full hover:text-xl duration-300 mx-2 sm:mx-0">
                بیشتر بخوانید
              </button>
            </div>
          </FooterPostContainer>
        </MainCard>
      </Container>
    </article>
  );
}
