import { useEffect, useState } from "react";
import Postagem from "./Postagem";
import FeedService from "../../services/FeedService";

const feedService = new FeedService();

export function Feed({ usuarioLogado }) {
    const [listaDePostagens, setListaDePostagens] = useState([]);

    // Hook para adicionar e remover a classe ao body
    useEffect(() => {
        // Adiciona a classe "feed-page" ao body quando o componente é montado
        document.body.classList.add('feed-page');
        
        // Remove a classe ao desmontar o componente (ao sair da página)
        return () => {
            document.body.classList.remove('feed-page');
        };
    }, []);

    // Carregar as postagens quando o usuário logado muda
    useEffect(() => {
        const carregarPostagens = async () => {
            try {
                const { data } = await feedService.carregarPostagens();

                // Formata os dados da postagem
                const postagensFormatadas = data.map((postagem) => ({
                    id: postagem._id,
                    usuario: {
                        id: postagem.userId,
                        nome: postagem.usuario.nome,
                        avatar: postagem.usuario.avatar,
                    },
                    fotoDoPost: postagem.foto,
                    descricao: postagem.descricao,
                    curtidas: postagem.likes,
                    comentarios: postagem.comentarios.map(c => ({
                        nome: c.nome,
                        mensagem: c.comentario
                    }))
                }));

                // Atualiza a lista de postagens no estado
                setListaDePostagens(postagensFormatadas);

            } catch (error) {
                console.error("Erro ao carregar postagens:", error);
            }
        };

        carregarPostagens();
    }, [usuarioLogado]);

    return (
        <div className="feedContainer largura30pctDesktop"> 
            {listaDePostagens.map(dadosPostagem => (
                <Postagem
                    key={dadosPostagem.id}
                    {...dadosPostagem} 
                    usuarioLogado={usuarioLogado}
                />
            ))}
        </div>
    );
}
