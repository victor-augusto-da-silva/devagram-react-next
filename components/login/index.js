import InputPublico from "../inputPublico";
import imagemEnvelope from "../../public/image/envelope.svg";
import imagemChave from "../../public/image/chave.svg";
import imagemLogo from "../../public/image/logo.svg";
import Image from 'next/image';
import Botao from '../botao'
import Link from "next/link";
import { useState } from "react";


export default function Login() {
/*Email começa vazio*/ 
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");


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
                <form>
                    <InputPublico
                        imagem={imagemEnvelope}
                        texto="E-mail"
                        tipo="email"
                        /*Ref do obj do input*/
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

                    <Botao
                        texto={"Login"}
                        tipo="submit"
                        desabilitado={false}
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