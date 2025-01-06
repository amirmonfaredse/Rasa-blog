import React from "react";
import { getSkillsCards } from "../../_data/data-services";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "مهارت ها",
  description: "",
};
export default async function Page() {
  const skills = await getSkillsCards();
  return (
    <div>
      {skills.length > 0 && (
        <div>
          {skills.map((skill) => (
            <div className="flex flex-col justify-evenly my-6" key={skill.id}>
              {skill.Image ? (
                <Image
                  src={skill.media}
                  height="300"
                  width="300"
                  alt={skill.title}
                />
              ) : (
                ""
              )}
              <h1 className="text-4xl">{skill.title}</h1>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
