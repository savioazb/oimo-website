"use client";

import Image from "next/image";
import Client1 from "@/assets/cliente-1.png";
import Client2 from "@/assets/cliente-2.png";
import Client3 from "@/assets/cliente-3.png";
import Mo from "@/assets/mo.svg";
import { useInView } from "react-intersection-observer";

export default function Jobs() {
  const { ref: JobsTitleRef, inView } = useInView();

  return (
    <section className="mb-8 p-4 sm:mb-40">
      <div className="relative mx-auto flex max-w-[1440px] flex-col p-2 sm:p-0">
        <Image
          className={`absolute -top-[12%] left-[14%] hidden rotate-45 opacity-0 transition-all duration-500 ease-in sm:block ${
            inView && "translate-y-10 opacity-100"
          }`}
          src={Mo}
          alt="Logo decorativo Mô"
        />
        <Image
          className={`absolute bottom-0 left-[24%] hidden -rotate-12 sm:block`}
          src={Mo}
          alt="Logo decorativo Mô"
        />
        <Image
          className={`absolute -top-[30%] right-[2%] hidden -rotate-6 opacity-0 transition-all duration-500 ease-in sm:block ${
            inView && "translate-x-10 opacity-100"
          }`}
          src={Mo}
          alt="Logo decorativo Mô"
        />
        <h3 ref={JobsTitleRef} className="mb-12 font-alt text-2xl uppercase">
          Trabalhos
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <Image src={Client1} width={500} alt="" />
          </div>
          <div>
            <Image src={Client2} width={500} alt="" />
          </div>
          <div>
            <Image src={Client3} width={500} alt="" />
          </div>
          <div>
            <Image src={Client1} width={500} alt="" />
          </div>
          <div>
            <Image src={Client2} width={500} alt="" />
          </div>
          <div>
            <Image src={Client3} width={500} alt="" />
          </div>
        </div>
        <button className="mt-8 w-fit justify-end self-end bg-transparent">
          <span className="font-alt text-xl uppercase">{"Ver Todos ->"}</span>
        </button>
      </div>
    </section>
  );
}
