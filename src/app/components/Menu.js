"use client";
import Image from "next/image";
import Wave from "@/assets/wave.svg";
import logoMain from "@/assets/logo-main.svg";
import Hamburguer from "@/assets/hamburguer.svg";
import { X } from "lucide-react";
import { useState } from "react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleIsMenuOpen() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      {/* DESKTOP MENU */}
      <div className="fixed z-50 mx-auto flex w-full flex-row items-center justify-end bg-transparent px-4 py-4 sm:justify-between sm:bg-gray-50 sm:px-20">
        <div className="mx-auto hidden w-full max-w-[1440px] items-center justify-center sm:flex sm:justify-between">
          <Image width={200} src={logoMain} alt="Logo Oi Mô" />
          <ul className="mt-4 flex flex-row gap-2">
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
        <button
          onClick={handleIsMenuOpen}
          className="inline-block justify-self-end sm:hidden"
        >
          <Image src={Hamburguer} alt="Abrir menu" />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed -left-[100%] top-0 z-50 flex h-screen w-full items-center justify-center bg-blue-500 transition-all duration-200 ease-in ${
          isMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <button
          onClick={handleIsMenuOpen}
          className="absolute right-4 top-4 text-gray-50"
        >
          <X className="text-gray-50" />
        </button>

        <ul className="flex flex-col items-center gap-4">
          <li className="text-4xl uppercase text-gray-50">Nós</li>
          <li className="text-4xl uppercase text-gray-50">Trabalhos</li>
          <li className="text-4xl uppercase text-gray-50">Contato</li>
        </ul>
      </div>
    </>
  );
}
