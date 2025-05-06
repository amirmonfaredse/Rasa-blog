
export default function SocialBox({ children }) {
  return (
    <div className="w-full md:w-1/3 h-20 md:h-full flex items-center justify-center md:justify-start">
      <div className="w-fit flex items-center justify-evenly md:justify-start md:gap-4 ">
        {children}
      </div>
    </div>
  );
}
