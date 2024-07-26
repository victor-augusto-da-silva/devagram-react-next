import Image from "next/image";
import { Inter } from "next/font/google";
import Botao from "../../components/botao";
import Avatar from "../../components/avatar";
import { UploadImagem } from "../../components/uploadImagem";
import { useState,useRef } from "react";


export default function Home() {

/*armazena o componente da imagem*/ 
const[imagem,setImagem] = useState(null);
const referenciaInput =    useRef(null);
console.log(imagem);


  return (
    <div>
    <h1>Ola mundo </h1>
    <button onClick={()=> referenciaInput?.current?.click() }>Abrir seletor de arquivos</button>
    <UploadImagem 
     setImagem={setImagem} 
     imagemPreview = {imagem?.preview}
     aoSetarAReferencia = {(ref) => referenciaInput.current = ref}
     /> 



    <Avatar/>
    <Botao texto={`Login`}  cor='primaria'   manipularClique= {() => console.log('Botão clicado')}  />
    </div>
  );
} 

/*cor='invertido'  pega a cor do botão e inverte*/