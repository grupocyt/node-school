export class AvionController {

    async despegar ( nombre:string ) : Promise<string> {
       const respuesta:string = `El avión ${nombre} está despegando`;
      return respuesta;
    } 

    async aterrizar ( nombre:string ) : Promise<string> {
       const respuesta:string = `El avión ${nombre} está aterrizando`;
      return respuesta;
    } 

    async repostar ( nombre:string ) : Promise<string> {
       const respuesta:string = `El avión ${nombre} está repostando`;
      return respuesta;
    } 
    async mantenimiento ( nombre:string ) : Promise<string> {
       const respuesta:string = `El avión ${nombre} está en mantenimiento`;
      return respuesta;
    } 
}