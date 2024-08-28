import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import UsuarioService from "../services/UsuarioService";
import Cabecalho from "../components/layout/Cabecalho";
import Rodape from "../components/layout/Rodape";

const usuarioService = new UsuarioService();

export default function comAutorizacao(Componente) {
    return function AutorizacaoWrapper(props) {
        const router = useRouter();
        const [isAuthenticated, setIsAuthenticated] = useState(false);
        const [isClient, setIsClient] = useState(false);

        useEffect(() => {
            setIsClient(true);
            if (usuarioService.estaAutenticado()) {
                setIsAuthenticated(true);
            } else {
                router.replace('/');
            }
        }, []);

        if (!isClient) {
            return <div>Loading...</div>;
        }

        if (!isAuthenticated) {
            return null;
        }

        return (
            <div>
                <Cabecalho />
                <Componente {...props} />
                <Rodape />
            </div>
        );
    };
}
