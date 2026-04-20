import { Router } from 'express'
import traductor from './traductor/routes'

 
 const api = Router()

api.use( '/traductor', traductor)
     
   
            
  
             
export default api