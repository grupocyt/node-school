import { Router } from 'express';
import { HolaTraduccionFunction } from './archivero.traducciones'
   
const traducciones = Router()
 
traducciones.get( '/hola',          HolaTraduccionFunction )
 
export default traducciones   