export class viajesController {

    async despegar ( nombre:string ) : Promise<string> {
       const respuesta:string = `El avión ${nombre} está despegando`;
      return respuesta;
    } 

    async aterrizar ( nombre:string ) : Promise<string> {
       const respuesta:string = `El avión ${nombre} está aterrizando`;
      return respuesta;
    } 

    async escala ( nombre:string ) : Promise<string> {
       const respuesta:string = `El avión ${nombre} hará escala`;
      return respuesta;
    } 
    async retraso ( nombre:string ) : Promise<string> {
       const respuesta:string = `El avión ${nombre} va con retraso`;
      return respuesta;
    } 
}