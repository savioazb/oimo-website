"use client";
import Image from "next/image";
import Waves from "@/assets/waves.svg";
import headSet from "@/assets/fones.png";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref: AboutTitleRef, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className="mx-auto mb-8 grid max-w-[1440px] grid-cols-1 p-4 sm:mb-40 lg:grid-cols-2">
      <article
        className={`order-last flex -translate-x-[10%] justify-center bg-yellow-500 p-2 transition-transform duration-700 ease-in sm:p-24 lg:order-first ${
          inView && "translate-x-0"
        }`}
      >
        <Image src={headSet} alt="Imagem retrô de fones de ouvido" />
      </article>
      <article className="flex justify-center p-4 sm:p-24">
        <div className="flex flex-col gap-12">
          <h3 ref={AboutTitleRef} className="font-alt text-2xl uppercase">
            Nós
          </h3>
          <h2
            className={`-translate-y-10 text-xl font-bold opacity-0 transition-all duration-700 ease-in ${
              inView && "translate-y-0 opacity-100"
            }`}
          >
            A OI MÔ é uma agência de music branding especializada em curadoria e
            gestão sonora para marcas.
          </h2>
          <p
            className={`-translate-y-10 text-xl opacity-0 transition-all delay-700 duration-700 ease-in ${
              inView && "translate-y-0 opacity-100"
            }`}
          >
            Acreditamos que a música é uma ferramenta poderosa, capaz de criar
            laços afetivos entre marcas e pessoas, promovendo experiências
            sensoriais e gerando resultados. Há mais de uma década no mercado,
            traduzimos valores e inspirações de nossos clientes em som e
            conteúdo desenvolvendo estratégias para diferentes plataformas.
          </p>
          <Image src={Waves} alt="Elemento gráfico ondas sonoras" />
        </div>
      </article>
    </section>
  );
}
