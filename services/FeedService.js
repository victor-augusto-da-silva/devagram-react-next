import HttpService from "./HttpService";

export  default class FeedService extends  HttpService{
 async   carregarPostagens(idUsuario){
        let url = '/feed';
       //bloco se eu estiver no perfil da pessoa 
        if(idUsuario){
            url += `?id=${idUsuario}`;
        }
        return this.get('/feed');
    }
}