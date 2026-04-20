import { Router } from 'express' 
import { HolaTraduccionFunction } from './archivero.traducciones'
   
const DtoTraducciones = Router()
 
DtoTraducciones.get( '/hola',          HolaTraduccionFunction )
 
export default DtoTraducciones   