import { Router } from 'express';
import { HolaTraduccionFunction } from './traducciones.api'
   
const traducciones = Router()
 
traducciones.get( '/hola',          HolaTraduccionFunction )
 
export default traducciones   