import { Router } from 'express' 
import { comoestasTraduccionFunction, estaslocoTraduccionFunction, HolaTraduccionFunction, queedadtienesTraduccionFunction } from '../traducciones/traducciones.api'
   
const DtoTraducciones = Router()
 
DtoTraducciones.get( '/hola',          HolaTraduccionFunction )
DtoTraducciones.get( '/comoestas',     comoestasTraduccionFunction )
DtoTraducciones.get( '/quedadtienes',     queedadtienesTraduccionFunction )
DtoTraducciones.get( '/estasloco',     estaslocoTraduccionFunction )



 
export default DtoTraducciones   
