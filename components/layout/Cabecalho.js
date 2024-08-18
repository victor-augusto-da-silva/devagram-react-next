import Image from 'next/image';
import logoHorizontalImg from '../../public/image/logoHorizontal.svg'
import imagemLupa from '../../public/image/lupa.svg';
import Navegacao from './Navegacao';


export default function Cabecalho(){
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
             value={''} onChange={() => console.log('Pesquisando')}>
            </input>
            </div>
            <Navegacao className='desktop'/>

            </div>
        </header>
    );
}