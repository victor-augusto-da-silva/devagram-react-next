import Link from "next/link";
import Avatar from "../avatar";
import Image from "next/image";

import imgCurtir from '../../public/image/curtir.svg';
import imgCurtido from '../../public/image/curtido.svg';
import imgComentarioAtivo from '../../public/image/comentarioAtivo.svg';
import imgComentarioCinza from '../../public/image/comentarioCinza.svg';

export default function Postagem({ usuario, fotoDoPost, descricao, comentarios }) {
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
                        onClick={() => {
                            console.log('Curtido')
                        }}
                    />
                    <Image
                        src={imgComentarioCinza}
                        alt='Icone comentar'
                        width={20}
                        height={20}
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
                        {descricao}
                    </p>
                </div>
            </div>
            <div className="comentariosDaPublicacao">
                {comentarios.map((comentario, i) => (
                    <div className="comentario" key={i}>
                        <strong className="comentario-nome">{comentario.nome}</strong>
                        <p className="descricao">{comentario.mensagem}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
