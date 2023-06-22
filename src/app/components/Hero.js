import Image from "next/image";
import LogoAnimation from "@/assets/signature.gif";

export default function Hero() {
  return (
    <section className="mx-auto mb-0 flex min-h-screen items-center justify-center bg-[url(../assets/bg-hero.png)] bg-cover p-2 sm:p-0 lg:mb-40">
      <Image src={LogoAnimation} alt="Oi Mô - Creative Music Production" />
    </section>
  );
}
