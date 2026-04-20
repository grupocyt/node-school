import { Router } from 'express'
import DtoTraducciones from './DtoTraducciones/routes.DtoTraducciones'
import DtoCalculadora from './DtoCalculadora/routes.DtoCalculadora'
  
 //hola
 const api = Router()

api.use( '/DtoTraducciones',  DtoTraducciones)
     
api.use( '/DtoCalculadora',  DtoCalculadora)

            
  
             
export default api