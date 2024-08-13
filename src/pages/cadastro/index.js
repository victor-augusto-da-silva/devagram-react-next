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

export default function Cadastro() {
    const [imagem, setImagem] = useState(null);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmacaoSenha, setConfirmacaoSenha] = useState("");

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
                <form>
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
                    />

                    <InputPublico
                        imagem={imagemEnvelope}
                        texto="E-mail"
                        tipo="email"
                        aoAlterarValor={(e) => setEmail(e.target.value)}
                        valor={email}
                    />
                    <InputPublico
                        imagem={imagemChave}
                        texto="Senha"
                        tipo="password"
                        aoAlterarValor={(e) => setSenha(e.target.value)}
                        valor={senha}
                    />
                    <InputPublico
                        imagem={imagemChave}
                        texto="Confirmar Senha"
                        tipo="password"
                        aoAlterarValor={(e) => setConfirmacaoSenha(e.target.value)}
                        valor={confirmacaoSenha}
                    />
                    <Botao
                        texto={"Cadastrar"}
                        tipo="submit"
                        desabilitado={false}
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
