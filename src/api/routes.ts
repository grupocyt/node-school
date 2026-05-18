import { Router } from 'express';
import avion from './avion/routes';

const api = Router()
 
// 2 forma "rutas": utilizamos las palabras reservadas GET, POST, PATCH, DELETE, PUT, HEADER para conectar con la funcion
api.use('/avion', avion)
  
export default api
