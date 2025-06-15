import { SliderContextProvider } from "@/app/(admin)/_providers/NavigationProvider";
import Accordion from "./_components/Accordion";
import { serviceGetSliders } from "@/app/_data/pages/pages.services";
import SliderContainer from "./_components/SliderContainer";

export default async function Page() {
  const sliders = await serviceGetSliders();
  return (
    <div className="w-full h-fit flex flex-col items-start justify-start lg:px-5 py-5 ">
      <div className="w-[90%] flex items-start justify-start gap-4">
        <SliderContextProvider>
          <Accordion title="مدیریت اسلاید شو">
            <SliderContainer sliders={sliders} />
          </Accordion>
        </SliderContextProvider>
      </div>
    </div>
  );
}
