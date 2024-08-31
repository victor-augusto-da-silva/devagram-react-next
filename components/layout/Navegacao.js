import Image from 'next/image';
import imgHomeAtivo from '../../public/image/homeAtivo.svg';
import imgHomeCinza from '../../public/image/homeCinza.svg';
import imgPublicacaoAtivo from '../../public/image/publicacaoAtivo.svg';
import imgPublicacaoCinza from '../../public/image/publicacaoCinza.svg';
import imgUsuarioAtivo from '../../public/image/usuarioAtivo.svg';
import imgUsuarioCinza from '../../public/image/usuarioCinza.svg';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


const mapaDeRotas = {
home: {
    imagemAtivo: imgHomeAtivo,
    rotasAtivacao:['/'],
    imagemPadrao: imgHomeCinza
},
publicacao: {
    imagemAtivo: imgPublicacaoAtivo,
    rotasAtivacao:['/publicacao'],
    imagemPadrao: imgPublicacaoCinza
},
perfil: {
    imagemAtivo: imgUsuarioAtivo,
    rotasAtivacao:['/perfil/eu','/perfil/eu/editar'],
    imagemPadrao: imgUsuarioCinza
}

}


export default function Navegacao({className}){

    const[rotaAtiva,setRotaAtiva] = useState('home');
   const router = useRouter();
   
    //router.asPath Ira monitorar sempre que houver troca de rota
    useEffect(() =>{
        definirRotaAtiva();
    },[router.asPath]);

    const definirRotaAtiva = () => {
       //Pega somente os objetos do primeiro nivel
        const chavesDoMapaDeRotas = Object.keys(mapaDeRotas);
        const indiceAtivo = chavesDoMapaDeRotas.findIndex(chave => {
            return mapaDeRotas[chave].rotasAtivacao.includes(
                window.location.pathname
            );
        });
        if(indiceAtivo === -1 ){
            setRotaAtiva('home');
        }
        else{
            setRotaAtiva(chavesDoMapaDeRotas[indiceAtivo]);
        }

       
    }
  

    //Definição das imagens ativas


    const obterImagem = (nomeRota) => {
            const rotaAtivada = mapaDeRotas[nomeRota];
            if(rotaAtiva === nomeRota) {
                return rotaAtivada.imagemAtivo
            }
            return rotaAtivada.imagemPadrao
    }



    const aoClicarNoIcone = (nomeRota) =>{
        setRotaAtiva(nomeRota);
        router.push(mapaDeRotas[nomeRota].rotasAtivacao[0])
    }



    return (
        <nav className={`barraNavegacao ${className}`}>
            <ul>
                <li  onClick={ () => aoClicarNoIcone('home')}>
                    <Image
                        src={obterImagem('home')}
                        alt='icone home'
                        width={20}
                        height={20}
                    />
                </li>
                <li  onClick={() =>  aoClicarNoIcone('publicacao')}>
                <Image
                        src={obterImagem('publicacao')}
                        alt='icone publicacao'
                        width={20}
                        height={20}
                    />
                </li>
                <li  onClick={() =>  aoClicarNoIcone('perfil')}>
                <Image
                        src={obterImagem('perfil')}
                        alt='icone usuario'
                        width={20}
                        height={20}
                    />
                </li>
            </ul>
        </nav>

    );
}