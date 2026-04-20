import { Router } from 'express' 
import { HolaFunction } from './index.api'
import { checkHola } from './validations'
 
const auth = Router()
 
auth.get( '/hola',      checkHola,       HolaFunction )
 
export default auth  