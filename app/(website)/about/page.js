import { getAboutSections } from "../../_data/data-services";
import Image from "next/image";
export const metadata = {
  title: "درباره من",
  description: "",
};
export default async function Page() {
  const abouts = await getAboutSections();

  return (
    <div className="h-full">
      {abouts.length > 0 &&
        abouts.map((about) => (
          <div key={about.id} className=" h-full flex flex-col justify-evenly">
            <Image
              src={about.media}
              width="300"
              height="300"
              alt={`${about.title}تصویر`}
            />
            <h1 className="text-4xl">{about.title}</h1>
            <p className="text-lg">{about.content}</p>
          </div>
        ))}
    </div>
  );
}
