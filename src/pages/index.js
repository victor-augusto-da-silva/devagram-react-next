import Image from "next/image";
import { Inter } from "next/font/google";
import Botao from "../../components/botao";
import Avatar from "../../components/avatar";


export default function Home() {
  return (
    <div>
    <h1>Ola mundo </h1>
    <Avatar/>
    <Botao texto={`Login`}  cor='primaria'   manipularClique= {() => console.log('Botão clicado')}  />
    </div>
  );
} 

/*cor='invertido'  pega a cor do botão e inverte*/