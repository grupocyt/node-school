import { Router } from 'express'
import DtoTraducciones from './DtoTraducciones/routes'
 
 
 const api = Router()

api.use( '/DtoTraducciones',  DtoTraducciones)
     
   
            
  
             
export default api