
import Image from 'next/image';
import Link from "next/link";
import Botao from '../../../components/botao';
import imagemLogo from "../../../public/image/logo.svg";
import imagemUSuarioAtivo from "../../../public/image/usuarioAtivo.svg";
import imagemEnvelope from "../../../public/image/envelope.svg";
import imagemChave from "../../../public/image/chave.svg";
import imagemAvatar from "../../../public/image/avatar.svg";
import InputPublico from '../../../components/inputPublico';
import UploadImagem from '../../../components/uploadImagem'; // Certifique-se de que está importando corretamente
import { useState } from 'react';
import {validarEmail, validarSenha,validarNome,validarConfirmacaoSenha} from '../../../utils/validadores';
import UsuarioService from '../../../services/UsuarioService';


const usuarioService = new UsuarioService();


export default function Cadastro() {
    const [imagem, setImagem] = useState(null);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmacaoSenha, setConfirmacaoSenha] = useState("");

    const [estaSubmetendo,setEstaSubmentendo] = useState(false);

    const validarFormulario = () =>{
        return(
            validarNome (nome) && validarEmail(email)&& 
            validarSenha(senha) &&  validarConfirmacaoSenha(senha,confirmacaoSenha)
        )
    }

    const aoSubmeter = async (e) =>{
        //evita o recarregamento da pagina
        e.preventDefault();
        if(!validarFormulario()){
            return;
        }
        setEstaSubmentendo(true);
        try{
            const corpoReqCadastro = new FormData();
            corpoReqCadastro.append("nome",nome);
            corpoReqCadastro.append("email",email);
            corpoReqCadastro.append("senha",senha);
             if(imagem?.arquivo){
                corpoReqCadastro.append("file",imagem.arquivo);
             }
             await usuarioService.cadastro(corpoReqCadastro);
            //TODO:  autenticar o usuario diretamente apos o cadastro

             alert("Sucesso!");
            }
        catch(error){
            alert("Erro ao cadastrar Usuario. " + error?.response?.data?.erro  )
        }
        setEstaSubmentendo(false);
    }


    return (
        <section className="paginaCadastro paginaPublica">
            <div className="logoContainer desktop">
                <Image
                    src={imagemLogo}
                    alt="logotipo"
                    layout="fill"
                    className="logo"
                />
            </div>
            <div className="conteudoPaginaPublica">
                <form onSubmit={aoSubmeter}>
                    <UploadImagem
                        imagemPreviewClassName="avatar avatarPreview"
                        imagemPreview={imagem?.preview || imagemAvatar.src}
                        setImagem={setImagem}
                    />

                    <InputPublico
                        imagem={imagemUSuarioAtivo}
                        texto="Nome Completo"
                        tipo="text"
                        aoAlterarValor={(e) => setNome(e.target.value)}
                        valor={nome}
                        mensagemValidacao="O nome precisa de pelo menos 2 caracteres"
                        exibirMensagemValidacao={nome && !validarNome(nome)}
                    />

                    <InputPublico
                        imagem={imagemEnvelope}
                        texto="E-mail"
                        tipo="email"
                        aoAlterarValor={(e) => setEmail(e.target.value)}
                        valor={email}
                        mensagemValidacao="O e-mail informado não é valido"
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
                    <InputPublico
                        imagem={imagemChave}
                        texto="Confirmar Senha"
                        tipo="password"
                        aoAlterarValor={(e) => setConfirmacaoSenha(e.target.value)}
                        valor={confirmacaoSenha}
                        mensagemValidacao="As senhas precisam ser iguais"
                        exibirMensagemValidacao={confirmacaoSenha && !validarConfirmacaoSenha(senha,confirmacaoSenha)}
                    />
                    <Botao
                        texto={"Cadastrar"}
                        tipo="submit"
                        desabilitado={!validarFormulario() || estaSubmetendo}
                    />
                </form>

                <div className="rodapePaginaPublica">
                    <p>Já possuí uma conta?</p>
                    <Link href="/"> Faça seu login agora</Link>
                </div>
            </div>
        </section>
    );
}
