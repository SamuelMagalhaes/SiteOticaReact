import Image from "next/image";
import styles from "./page.module.css";
import Capa from "@/components/Capa";
import Produtos from "@/components/Produtos";
import Sobre from "@/components/Sobre";
import Contato from "@/components/Contato";

export default function Home() {
  return (
    <main>
      <Capa/>
      <Produtos/>
      <Sobre/>
      <Contato/>
    </main>
  );
}
