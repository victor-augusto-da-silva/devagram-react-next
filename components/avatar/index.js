import avatarImg from '../../public/image/avatar.svg'


export default function Avatar({src }){
/*caso tenha imagem*/ 
    const getAvatar = () =>{
        if(src && src !=='undefined' )
        {
            return src;
        }
        return avatarImg.src;
        }

    return(
        <img
        src={getAvatar()}
        alt='Avatar'
        className='avatar'
        />  
    );

}