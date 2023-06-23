"use client";

import Image from "next/image";
import Mo from "@/assets/mo.svg";
import { useInView } from "react-intersection-observer";

export default function Jobs({ jobs }) {
  const { ref: JobsTitleRef, inView } = useInView();

  return (
    <section className="mb-8 p-4 sm:mb-40">
      <div className="relative mx-auto flex max-w-[1440px] flex-col p-2 sm:p-0">
        <Image
          className={`absolute -top-[12%] left-[14%] z-10 hidden rotate-45 opacity-0 transition-all duration-500 ease-in sm:block ${
            inView && "translate-y-10 opacity-100"
          }`}
          src={Mo}
          alt="Logo decorativo Mô"
        />
        <Image
          className={`absolute bottom-0 left-[24%] z-10 hidden -rotate-12 sm:block`}
          src={Mo}
          alt="Logo decorativo Mô"
        />
        <Image
          className={`absolute -top-[30%] right-[2%] z-10 hidden -rotate-6 opacity-0 transition-all duration-500 ease-in sm:block ${
            inView && "translate-x-10 opacity-100"
          }`}
          src={Mo}
          alt="Logo decorativo Mô"
        />
        <h3 ref={JobsTitleRef} className="mb-12 font-alt text-2xl uppercase">
          Trabalho
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {jobs.map((job) => (
            <a key={job.sys.id} className="group relative z-0 cursor-pointer">
              <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-blue-500 opacity-0 transition-opacity duration-100 ease-in group-hover:opacity-80">
                <h2 className="font-alt uppercase text-gray-50">
                  {job.fields.title}
                </h2>
              </div>
              <Image
                src={`https:${job.fields.backgroundImage.fields.file.url}`}
                className="h-[300px] w-full object-cover"
                width={500}
                height={300}
                alt=""
              />
            </a>
          ))}
        </div>
        <button className="group mt-8 w-fit justify-end self-end bg-transparent p-2 text-gray-900 transition-colors ease-in hover:bg-blue-500 hover:text-gray-50">
          <span className="mr-4 font-alt text-lg uppercase">{"Ver Todos"}</span>
          <span className="inline-block -translate-x-2 font-alt text-lg uppercase transition-transform duration-200 ease-in group-hover:translate-x-0">
            {"->"}
          </span>
        </button>
      </div>
    </section>
  );
}
