"use client";
import Accordion from "./_components/Accordion";
import SliderContainer from "./_components/SliderContainer";

export default function Page() {
  return (
    <div className="w-full h-fit flex flex-col items-start justify-start lg:px-5 py-5 ">
      <div className="w-[90%] flex items-start justify-start gap-4">
        <Accordion title="مدیریت اسلاید شو">
          <SliderContainer  />
        </Accordion>
      </div>
    </div>
  );
}
