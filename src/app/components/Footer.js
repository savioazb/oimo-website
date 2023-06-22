import Image from "next/image";
import logoMain from "@/assets/logo-main.svg";

import Instagram from "@/assets/instagram.svg";
import Whatsapp from "@/assets/whatsapp.svg";
import Linkedin from "@/assets/linkedin.svg";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row sm:items-end sm:px-4 sm:py-14">
      <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-right">
        <Image
          src={logoMain}
          width={300}
          alt="Oi Mô - Creative Music Production"
        />
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-xs uppercase">São Paulo, Brasil</span>
          <span className="text-xs">
            © 2023 OI MÔ - TODOS OS DIREITOS RESERVADOS
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-right">
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
  );
}
