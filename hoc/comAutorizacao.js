import { useRouter } from "next/navigation";
import UsuarioService from "../services/UsuarioService"

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
            return <Componente {...props} />
        }
        return null;
    }
}