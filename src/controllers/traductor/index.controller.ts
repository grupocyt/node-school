export class TraductorController {

    async hola ( ) : Promise<string> {
       const respuesta:string = "hello";
      return respuesta;
    } 

    async palabra ( texto:string ) : Promise<string> {
        let respuesta:string = ''

        switch (texto) {
            case 'hola':
                respuesta =  'Hello';
            break;

            case 'adios':
                respuesta =  'bye';
            break;
        
            default:
                respuesta = 'No existe traducción para el texto';
                break;
        }

      return respuesta;
    } 
}