import { Router } from 'express'
import DtoTraducciones from './DtoTraducciones/routes.DtoTraducciones'
 
 //hola
 const api = Router()

api.use( '/DtoTraducciones',  DtoTraducciones)
     
   
            
  
             
export default api