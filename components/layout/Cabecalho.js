import Image from 'next/image';
import logoHorizontalImg from '../../public/image/logoHorizontal.svg'
import imagemLupa from '../../public/image/lupa.svg';
import Navegacao from './Navegacao';
import { useState } from 'react';
import ResultadoPesquisa from './ResultadoPesquisa';
import UsuarioService from '../../services/UsuarioService';
import { useRouter } from 'next/router';


const usuarioService = new UsuarioService();


export default function Cabecalho(){
    const[resultadoPesquisa,setResultadoPesquisa]  = useState([]);
    const [termoPesquisado,setTermoPesquisado] = useState('');
     const router = useRouter();   
    const aoPesquisar = async (e) => {
       setTermoPesquisado(e.target.value);
       setResultadoPesquisa([]);

       if(termoPesquisado.length <3 ){
        return ;
    }


    try {
        const {data} = await usuarioService.pesquisar(termoPesquisado);
         setResultadoPesquisa(data);
    } catch (error) {
        alert('Erro ao pesquisar usuario.' + error?.response?.data?.erro);
    }
 
    }

    const aoClicarResultadoPesquisa = (id) =>{
        //limpando o termo pesquisado para navegação
        setResultadoPesquisa([]);
        setTermoPesquisado('');


      //A pasta esta criada [id] para que eu possa usar o hook do Id do usuario pesquisado
        router.push(`/perfil/${id}`);
    }

    const redirecionarParaHome = () => {
        router.push('/');
    }

    return (
        <header className='cabecalhoPrincipal'>
            <div className='conteudoCabecalhoPrincipal'> 
            <div className='logoCabecalhoPrincipal'>
                <Image
                onClick={redirecionarParaHome}
                src={logoHorizontalImg}
                alt='Logo Devagram'
                layout='fill' // permite redimensionar imagem baseado na div pai
                />
            </div>
            <div className='barraPesquisa'>
            <div className='containerImagemLupa'>
            <Image 
                src={imagemLupa}
                alt='Icone da Lupa'
                layout='fill'
            />
            </div>

            <input type='text' placeholder='Pesquisar'
             value={termoPesquisado} onChange={aoPesquisar}>
            </input>
            </div>
            <Navegacao className='desktop'/>

            </div>
            {resultadoPesquisa.length >0  && (
            <div className='resultadoPesquisaContainer'>
            {resultadoPesquisa.map(r => (
                <ResultadoPesquisa 
                    avatar={r.avatar}
                    nome={r.nome}
                    email={r.email}
                    key={r._id}
                    id={r._id}
                    onClick={aoClicarResultadoPesquisa}
                />
            ))}
            </div>
            )}
          
        </header>
    );
}