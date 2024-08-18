import { useRouter } from "next/navigation";
import UsuarioService from "../services/UsuarioService"
import Cabecalho from "../components/layout/Cabecalho";

const usuarioService = new UsuarioService();

export default function comAutorizacao(Componente){
    return (props) => {
        const router = useRouter();

        if(typeof window !== 'undefined'){
            if(!usuarioService.estaAutenticado()){
                // substitui a url atual pela raiz
                router.replace('/');
                return null;
            }
            return (
                <div> 
                <Cabecalho />
                <Componente {...props} />
                </div>    
            );

     
        }
        return null;
    }
}