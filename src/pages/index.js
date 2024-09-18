// index.js ou outro arquivo principal
import Image from "next/image";
import { Inter } from "next/font/google";
import Botao from "../../components/botao";
import Avatar from "../../components/avatar";
import { UploadImagem } from "../../components/uploadImagem";
import { useState, useRef, useEffect } from "react";
import Login from "../../components/login";
import UsuarioService from "../../services/UsuarioService";
import HomePage from "../../components/home"; // Importando o componente Home

const usuarioService = new UsuarioService();

export default function Main() {
	/* armazena o componente da imagem */
	const [imagem, setImagem] = useState(null);
	const referenciaInput = useRef(null);
	console.log(imagem);
	const [estaAutenticado, setEstaAutenticado] = useState(null);

	/* [] é chamado apenas a primeira vez */
	useEffect(() => {
		setEstaAutenticado(usuarioService.estaAutenticado());
	}, []);

	if(estaAutenticado === null)
	{
		return null;
	}

	if (estaAutenticado) {
		return <HomePage />; // Usando o componente Home importado
	}

	return (
		<>
			<Login aposAutenticacao={() => setEstaAutenticado(true)} />
		</>
	);
}
