import Image from 'next/image';
import logoHorizontalImg from '../../public/image/logoHorizontal.svg'
import imagemLupa from '../../public/image/lupa.svg';
import Navegacao from './Navegacao';
import { useState } from 'react';
import ResultadoPesquisa from './ResultadoPesquisa';


export default function Cabecalho(){
    const[resultadoPesquisa,setResultadoPesquisa] = useState([]);
    const [termoPesquisado,setTermoPesquisado] = useState([]);
    const aoPesquisar = (e) => {
       setTermoPesquisado(e.target.value);
       setResultadoPesquisa([]);

       if(termoPesquisado.length <3 ){
        return ;
    }
    setResultadoPesquisa([
        {
          avatar: '',
          nome: 'Teste1',
          email: 'teste@teste1.com',  
          _id: '1234'
        },
        {
            avatar: '',
            nome: 'teste2',
            email: 'teste',  
            _id: '1234'
          },
          {
            avatar: '',
            nome: 'teste3',
            email: 'teste',  
            _id: '1234'
          }
])
    }

    const aoClicarResultadoPesquisa = (id) =>{
        console.log('aoClicarResultadoPesquisa',{id});    
    }
    return (
        <header className='cabecalhoPrincipal'>
            <div className='conteudoCabecalhoPrincipal'> 
            <div className='logoCabecalhoPrincipal'>
                <Image
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