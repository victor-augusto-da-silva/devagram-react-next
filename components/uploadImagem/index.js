import { useEffect, useRef } from "react";

/*aceita qlqr tipo de imagem*/ 
export default function UploadImagem({
    className = '',
    setImagem,
    imagemPreview,
    imagemPreviewClassName = '',
    aoSetarAReferencia
}) {
    const referenciaInput = useRef(null);

    useEffect(() => {
        if (!aoSetarAReferencia) {
            return;
        }

        aoSetarAReferencia(referenciaInput.current);
    }, [aoSetarAReferencia]);

    const abrirSeletorArquivos = () => {
        referenciaInput.current.click();
    }

    const aoAlterarImagem = () => {
        if (!referenciaInput.current.files.length) {
            return;
        }
        const arquivo = referenciaInput.current.files[0];
        /*le o arquivo e devolve a url*/ 
        const fileReader = new FileReader();
        fileReader.readAsDataURL(arquivo);
        fileReader.onloadend = () => {
            /*ao final da leitura*/ 
            setImagem({
                preview: fileReader.result,
                arquivo
            });
        }
    }

    return (
        <div className={`uploadImagemContainer ${className}`} onClick={abrirSeletorArquivos}>
            {imagemPreview && (
                <div className="imagemPreviewContainer">
                    <img src={imagemPreview} alt="imagem preview" className={imagemPreviewClassName} /> 
                </div>
            )}
            <input 
                type="file" 
                className="oculto" 
                accept="image/*"
                ref={referenciaInput}
                onChange={aoAlterarImagem}
            />
        </div>
    );
}
