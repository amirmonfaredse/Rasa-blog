import React from "react";
import { getServicesSections } from "../_libs/data-services";
import Image from "next/image";
export const metadata = {
  title: "خدمات",
  description: "",
};
export default async function Page() {
  const services = await getServicesSections();
  return (
    <div>
      {services.length > 0 && (
        <div>
          {services.map((service) => (
            <div className="flex  justify-start" key={service.id}>
              {service.Image ? (
                <Image
                  src={service.media}
                  height="300"
                  width="300"
                  alt={service.title}
                />
              ) : (
                ""
              )}
              <div className="flex flex-col justify-evenly">
                <h1 className="text-4xl">{service.title}</h1>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
