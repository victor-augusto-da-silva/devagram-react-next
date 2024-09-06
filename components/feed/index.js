import { useEffect, useState } from "react";
import Postagem from "./Postagem";

export function Feed({ usuarioLogado }) {
    const [listaDePostagens, setListaDePostagens] = useState([]);
    
    useEffect(() => {
        console.log('Carregar o feed');
        setListaDePostagens([
            {
                id: '1',
                usuario: {
                    id: '1',
                    nome: 'teste',
                    avatar: null
                },
                fotoDoPost: 'https://www.freecodecamp.org/portuguese/news/content/images/2023/03/Ekran-Resmi-2019-11-18-18.08.13.png',
                descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
                curtidas: [],
                comentarios: [
                    {
                        nome: 'Teste',
                        mensagem: 'oK'
                    },
                    {
                        nome: 'Teste2',
                        mensagem: 'Legal'
                    }
                    ,
                    {
                        nome: 'Teste3',
                        mensagem: 'Legal ate de mais'
                    }
                ]
            },
            {
                id: '2',
                usuario: {
                    id: '2',
                    nome: 'abc',
                    avatar: null
                },
                fotoDoPost: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
                descricao: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
                curtidas: [],
                comentarios: [
                    {
                        nome: 'Teste',
                        mensagem: 'oK'
                    }
                ]
            },
        ]);
    }, [usuarioLogado]);

    return (
        <div className="feedContainer"> 
            {listaDePostagens.map(dadosPostagem => (
                <Postagem key={dadosPostagem.id} {...dadosPostagem} />
            ))}
        </div>
    );
}
