import { Router } from 'express' 
import { comoestasTraduccionFunction, estaslocoTraduccionFunction, HolaTraduccionFunction, queedadtienesTraduccionFunction } from './traduccion.api'
   
const traduccion = Router()
 
traduccion.get( '/hola',          HolaTraduccionFunction )
traduccion.get( '/comoestas',     comoestasTraduccionFunction )
traduccion.get( '/quedadtienes',     queedadtienesTraduccionFunction )
traduccion.get( '/estasloco',     estaslocoTraduccionFunction )



 
export default traduccion   
