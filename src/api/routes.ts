import { Router } from 'express'
import avion from './avion/routes'
 
 //hola
 const api = Router()

api.use( '/avion',  avion)
 
             
export default api
