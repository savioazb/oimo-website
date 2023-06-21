import Image from "next/image";
import "./globals.css";
import localFont from "next/font/local";
import logoMenu from "../assets/logo-menu.svg";
import logoMain from "../assets/logo-main.svg";
import Wave from "../assets/wave.svg";
import Waves from "../assets/waves.svg";
import headSet from "../assets/fones.png";
import Client1 from "../assets/cliente-1.png";
import Client2 from "../assets/cliente-2.png";
import Client3 from "../assets/cliente-3.png";
import Pattern from "../assets/pattern.png";
import Instagram from "../assets/instagram.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Linkedin from "../assets/linkedin.svg";
import Mo from "../assets/mo.svg";
import LongWave from "../assets/elemento-grafico-mo.svg";

const vcr = localFont({
  src: "./fonts/vcr_osd.ttf",
  variable: "--font-vcr",
});
const helvetica = localFont({
  src: [
    {
      path: "./fonts/helvetica-neue-light.otf",
      weight: "400",
      style: "regular",
    },
    {
      path: "./fonts/helvetica-neue-bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-helvetica",
});

export const metadata = {
  title: "OI MÔ",
  description: "Music branding",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${vcr.variable} ${helvetica.variable} bg-gray-50 font-sans text-gray-900`}
      >
        <main className="">
          {/* MENU */}
          <div className="fixed z-50 mx-auto flex w-full flex-row items-center justify-between bg-gray-50 px-20 py-4">
            <div className="mx-auto flex w-full max-w-[1440px] items-center justify-center sm:justify-between">
              <Image src={logoMenu} alt="Logo Oi Mô" />
              <ul className="mt-4 hidden flex-row gap-2 sm:flex">
                <li className="uppercase">Nós</li>
                <li>
                  <Image src={Wave} alt="Elemento decorativo onda" />
                </li>
                <li className="uppercase">Trabalhos</li>
                <li>
                  <Image src={Wave} alt="Elemento decorativo onda" />
                </li>
                <li className="uppercase">Contato</li>
              </ul>
            </div>
          </div>

          {/* HERO */}
          <section className="mx-auto mb-0 flex min-h-screen items-center justify-center bg-[url(../assets/bg-hero.png)] bg-cover p-2 sm:p-0 lg:mb-40">
            <Image src={logoMain} alt="Oi Mô - Creative Music Production" />
          </section>

          {/* NÓS */}
          <section className="mx-auto mb-8 grid max-w-[1440px] grid-cols-1 p-4 sm:mb-40 lg:grid-cols-2">
            <article className="order-last flex justify-center bg-yellow-500 p-2 sm:p-24 lg:order-first">
              <Image src={headSet} alt="Imagem retrô de fones de ouvido" />
            </article>
            <article className="flex justify-center p-4 sm:p-24">
              <div className="flex flex-col gap-12">
                <h3 className="font-alt text-2xl uppercase">Nós</h3>
                <h2 className="text-xl font-bold">
                  A OI MÔ é uma agência de music branding especializada em
                  curadoria e gestão sonora para marcas.
                </h2>
                <p className="text-xl">
                  Acreditamos que a música é uma ferramenta poderosa, capaz de
                  criar laços afetivos entre marcas e pessoas, promovendo
                  experiências sensoriais e gerando resultados. Há mais de uma
                  década no mercado, traduzimos valores e inspirações de nossos
                  clientes em som e conteúdo desenvolvendo estratégias para
                  diferentes plataformas.
                </p>
                <Image src={Waves} alt="Elemento gráfico ondas sonoras" />
              </div>
            </article>
          </section>

          {/* TRABALHOS */}
          <section className="mb-8 p-4 sm:mb-40">
            <div className="relative mx-auto flex max-w-[1440px] flex-col p-2 sm:p-0">
              <Image
                className="absolute -top-[12%] left-[14%] hidden rotate-45 sm:block"
                src={Mo}
                alt="Logo decorativo Mô"
              />
              <Image
                className="absolute bottom-0 left-[24%] hidden -rotate-12 sm:block"
                src={Mo}
                alt="Logo decorativo Mô"
              />
              <Image
                className="absolute -top-[30%] right-[2%] hidden -rotate-6 sm:block"
                src={Mo}
                alt="Logo decorativo Mô"
              />
              <h3 className="mb-12 font-alt text-2xl uppercase">Trabalhos</h3>
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
                <span className="font-alt text-xl uppercase">
                  {"Ver Todos ->"}
                </span>
              </button>
            </div>
          </section>

          {/* CONTATO */}
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
                        <label
                          className="text-xs font-bold uppercase"
                          htmlFor="name"
                        >
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
                        <label
                          className="text-xs font-bold uppercase"
                          htmlFor="name"
                        >
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
                    <span className="font-alt text-xl uppercase">
                      {"Enviar ->"}
                    </span>
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

          {/* FOOTER */}
          <footer className="mx-auto flex max-w-[1440px] flex-col items-center justify-between px-4 py-4 sm:flex-row sm:items-end sm:px-4 sm:py-14">
            <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-right">
              <Image
                src={logoMain}
                width={300}
                alt="Oi Mô - Creative Music Production"
              />
              <span>São Paulo, Brasil</span>
              <span>© 2023 OI MÔ - TODOS OS DIREITOS RESERVADOS</span>
            </div>
            <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-right">
              <span>oi@oimo.com.br</span>
              <span>+55 21 999 999 999</span>
              <div className="flex flex-row gap-2">
                <a href="#">
                  <Image src={Instagram} alt="Logo Instagram" />
                </a>
                <a href="#">
                  <Image src={Whatsapp} alt="Logo WhatsApp" />
                </a>
                <a href="#">
                  <Image src={Linkedin} alt="Logo LinkedIn" />
                </a>
              </div>
            </div>
          </footer>
          {children}
        </main>
      </body>
    </html>
  );
}
