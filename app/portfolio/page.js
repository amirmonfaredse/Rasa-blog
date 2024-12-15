import React from "react";
import { getPortfolioCards } from "../_libs/data-services";
import Image from "next/image";
export const metadata = {
  title: "نمونه کارها",
  description: "",
};
export default async function Page() {
  const portfolios = await getPortfolioCards();

  return (
    <div>
      {portfolios.length > 0 && (
        <div>
          {portfolios.map((portfolio) => (
            <div className="flex  justify-start" key={portfolio.id}>
              <Image
                src={portfolio.media}
                height="300"
                width="300"
                alt={portfolio.title}
              />
              <div className="flex flex-col justify-evenly">
                <h1 className="text-4xl">{portfolio.title}</h1>
                <p>{portfolio.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
