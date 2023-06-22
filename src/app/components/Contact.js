import Image from "next/image";
import Pattern from "@/assets/pattern.png";
import LongWave from "@/assets/elemento-grafico-mo.svg";

export default function Contact() {
  return (
    <section className="mb-8 p-4 sm:mb-40">
      <div className="relative mx-auto max-w-[1440px] p-2 sm:p-0">
        <Image
          className="w-full sm:w-[1063px]"
          src={Pattern}
          alt="Oi Mô - Creative Music Production"
        />
        <div className="relative right-0 top-1/2 -translate-y-0 border-2 border-gray-900 bg-gray-50 p-4 sm:absolute sm:-translate-y-1/2 sm:p-16">
          <h3 className="mb-4 font-alt text-xl uppercase sm:mb-12 sm:text-2xl">
            {"Fala com a gente :)"}
          </h3>
          <form action="">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold uppercase" htmlFor="name">
                    Nome
                  </label>
                  <input
                    className="w-full border-2 border-gray-900 bg-gray-50 p-2 placeholder:text-sm placeholder:text-gray-700"
                    type="text"
                    placeholder="Nome"
                    id="name"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold uppercase" htmlFor="name">
                    Email
                  </label>
                  <input
                    className="w-full border-2 border-gray-900 bg-gray-50 p-2 placeholder:text-sm placeholder:text-gray-700"
                    type="email"
                    name=""
                    id="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div>
                <label
                  className="text-xs font-bold uppercase"
                  htmlFor="subject"
                >
                  Assunto
                </label>
                <input
                  className="w-full border-2 border-gray-900 bg-gray-50 p-2 placeholder:text-sm placeholder:text-gray-700"
                  type="text"
                  name=""
                  id="subject"
                  placeholder="Assunto"
                />
              </div>
              <div>
                <label
                  className="text-xs font-bold uppercase"
                  htmlFor="message"
                >
                  Mensagem
                </label>
                <textarea
                  className="h-40 w-full resize-none border-2 border-gray-900 bg-gray-50 p-2 placeholder:text-sm placeholder:text-gray-700"
                  name=""
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Mensagem"
                />
              </div>
            </div>
            <button className="mt-4 w-fit bg-transparent">
              <span className="font-alt text-xl uppercase">{"Enviar ->"}</span>
            </button>
          </form>
          <Image
            className="absolute -bottom-[20%] right-0 hidden w-60 sm:-bottom-[10%]  sm:inline-block sm:w-[400px]"
            src={LongWave}
            alt="Elemento gráfico Mô"
          />
        </div>
      </div>
    </section>
  );
}
