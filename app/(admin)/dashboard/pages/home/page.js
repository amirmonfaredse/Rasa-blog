import { SliderContextProvider } from "@/app/(admin)/_providers/NavigationProvider";
import Accordion from "./_components/Accordion";
import { serviceGetSliders } from "@/app/_data/pages/pages.services";

export default async function Page() {
  const sliders = await serviceGetSliders();
  return (
    <div className="w-full max-h-screen flex flex-col items-start justify-start p-5">
      <div className="w-full flex items-start justify-start gap-4">
        <SliderContextProvider>
          <Accordion title="مدیریت اسلاید شو" sliders={sliders} />
        </SliderContextProvider>
      </div>
    </div>
  );
}
