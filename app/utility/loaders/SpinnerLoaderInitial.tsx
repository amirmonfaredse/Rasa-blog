import Image from "next/image";
import bookLoader from "../../../public/svg/initial/book-loader.gif";
export default function SpinnerLoaderInitial() {
  return <Image src={bookLoader} alt="درحال بارگذاری" className="" />;
}
