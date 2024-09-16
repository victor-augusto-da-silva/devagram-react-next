import Link from "next/link";
import Avatar from "../avatar";
import Image from "next/image";
import imgCurtir from '../../public/image/curtir.svg';
import imgCurtido from '../../public/image/curtido.svg';
import imgComentarioAtivo from '../../public/image/comentarioAtivo.svg';
import imgComentarioCinza from '../../public/image/comentarioCinza.svg';
import { useState } from "react";

const tamanhoLimiteDescricao = 90;


export default function Postagem({
     usuario, fotoDoPost, descricao, comentarios
     }) {

    const [tamanhoAtualDaDescricao,setTamanhoAtualDaDescricao] = useState(tamanhoLimiteDescricao);
        const exibirDescricaoCompleta = () => {
            setTamanhoAtualDaDescricao(Number.MAX_SAFE_INTEGER);
        }
    const descricaoMaiorQueLimite = () =>{
        return descricao.length > tamanhoAtualDaDescricao
    }


    const obterDescricao = () =>{
        let  mensagem = descricao.substring(0, tamanhoAtualDaDescricao);



        if(descricaoMaiorQueLimite()) 
        {
                mensagem += '...'
        }
        return mensagem
    }

    return (
        <div className="postagem">
            <Link href={`/perfil/${usuario.id}`}>
                <section className="cabecalhoPostagem">
                    <Avatar src={usuario.avatar} />
                    <strong>{usuario.nome}</strong>
                </section>
            </Link>
            <div className="fotoDaPostagem">
                <img src={fotoDoPost} alt='Foto da postagem' />
            </div>
            <div className="rodapeDaPostagem">
                <div className="acoesDaPostagem">
                    
                    <Image
                        src={imgCurtir}
                        alt='Icone Curtir'
                        width={20}
                        height={20}
                         className="icon"
                        onClick={() => {
                            console.log('Curtido')
                        }}
                    />
                    <Image
                        src={imgComentarioCinza}
                        alt='Icone comentar'
                        width={20}
                        height={20}
                         className="icon"
                        onClick={() => {
                            console.log('comentar')
                        }}
                    />
                  
                    <span className="quantidadeCurtidas">
                        Curtido por <strong>10 pessoas</strong>
                    </span>
                </div>
                <div className="descricaoDaPostagem">
                    <strong className="nomeUsuario">{usuario.nome}</strong>
                    <p className="descricao">
                        {obterDescricao()}
                        {descricaoMaiorQueLimite() &&  (
                            <span onClick={exibirDescricaoCompleta}   className="exibirDescricaoCompleta">
                                mais
                            </span>
                        )}
                    </p>
                </div>
                <div className="comentariosDaPublicacao">
                {comentarios.map((comentarios, i) => (
                    <div className="comentario" key={i}>
                        <strong className="comentario-nome">{comentarios.nome}</strong>
                        <p className="descricao">{comentarios.mensagem}</p>
                    </div>
                ))}
            </div>
            </div>
      
        </div>
    );
}
