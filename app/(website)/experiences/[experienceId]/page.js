import {
  getExperiencesCard,
  getExperiencesCards,
} from "@/app/_libs/data-services";

export async function generateMetadata({ params }) {
  const { experienceId } = params;
  const experience = await getExperiencesCard(experienceId);
  return { title: experience.title };
}
export async function generateStaticParams() {
  const experiences = await getExperiencesCards();
  const ids = experiences.map((exp) => ({
    experienceId: String(exp.id),
  }));
  return ids;
}

export default async function Page({ params }) {
  const { experienceId } = params;
  const experience = await getExperiencesCard(experienceId);

  return <div>{experience.title}</div>;
}
