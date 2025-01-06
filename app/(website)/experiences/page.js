import Image from "next/image";
import { getExperiencesCards } from "../../_data/data-services";
import Link from "next/link";
export const metadata = {
  title: "تجربیات من",
  description: "",
};
export default async function Page() {
  const experiences = await getExperiencesCards();

  return (
    <div className="h-full">
      {experiences.length > 0 && (
        <div className="h-full">
          {experiences.map((exp) => (
            <div key={exp.id} className="flex flex-col justify-evenly h-full">
              <Image
                src={exp.media}
                width="400"
                height="300"
                alt={`تجربه ی ${exp.title}`}
              />
              <h1 className="text-4xl">{exp.title}</h1>
              <p>{exp.description}</p>
              <Link href={`/experiences/${exp.id}`}>مشاهده جزئیات</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
