import InputPublico from "../inputPublico";
import imagemEnvelope from "../../public/image/envelope.svg";
import imagemChave from "../../public/image/chave.svg";
import imagemLogo from "../../public/image/logo.svg";
import Image from 'next/image';
import Botao from '../botao'
import Link from "next/link";
import { useState } from "react";
import {validarEmail, validarSenha} from '../../utils/validadores'
import UsuarioService from "../../services/UsuarioService";


const usuarioService = new UsuarioService;

export default function Login({aposAutenticacao}) {
/*Email começa vazio*/ 
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [estaSubmetendo,setEstaSubmetendo] = useState(false);
    const validarFormulario = () => {
        return(
            validarEmail(email) && validarSenha(senha)
        )
    }
    const aoSubmeter  = async(e) =>{
        e.preventDefault();
        if(!validarFormulario()){
            return
        }
        setEstaSubmetendo(true);
        try{
           await usuarioService.login({
            login: email ,
              senha
            });

             //  redireciona o usuario para home
             if(aposAutenticacao){
                aposAutenticacao();
             }
      }
        catch(error){
            alert("Erro ao realizar login. " + error?.response?.data?.erro  );
        }
        setEstaSubmetendo(false);
    }
    return (
        <section className="paginaLogin paginaPublica">
          <div className="logoContainer">
                <Image
                    src={imagemLogo}
                    alt='logotipo'
                    layout="fill"
                    className="logo"
                />
            </div>
            <div className="conteudoPaginaPublica">
                <form onSubmit={aoSubmeter}>
                    <InputPublico
                        imagem={imagemEnvelope}
                        texto="E-mail"
                        tipo="email"
                        /*Ref do obj do input*/
                        aoAlterarValor={(e) => setEmail(e.target.value)}
                        valor={email}
                        mensagemValidacao="O endereço informado é invalido"
                        exibirMensagemValidacao={email && !validarEmail(email)}
                    />
                    <InputPublico
                        imagem={imagemChave}
                        texto="Senha"
                        tipo="password"
                        aoAlterarValor={(e) => setSenha(e.target.value)}
                        valor={senha}
                        mensagemValidacao="A senha deve conter pelo menos 3 caracteres"
                        exibirMensagemValidacao={senha && !validarSenha(senha)}
                    />

                    <Botao
                        texto={"Login"}
                        tipo="submit"
                        desabilitado={!validarFormulario() || estaSubmetendo}
                    /> 
                </form>
                <div className="rodapePaginaPublica">
                <p>Não possui uma conta?</p>
                <Link href="/cadastro"> Faça seu cadastro agora</Link>
                </div>
            </div>
        </section>
    );
}