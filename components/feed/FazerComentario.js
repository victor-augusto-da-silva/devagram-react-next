import Avatar from "../avatar";

export default function FazerComentario ({usuarioLogado}) {
    return  (
        <div className="containerFazerComentario"> 
        <Avatar  src={usuarioLogado.Avatar}/> 
        <textarea 
        placeholder="Adicione um comentário..."
        rows={1}>

        
        </textarea>
        </div>
    );
}