import { Router } from 'express' 
import { HolaFunction } from './index.api'
  
const traductor = Router()
 
traductor.get( '/hola',          HolaFunction )
 
export default traductor   