import { Router } from 'express';
import avion from './avion/routes';
import calculadora from './calculadora/routes';
import camarero from './camarero/routes';


const api = Router()
 
// 2 forma "rutas": utilizamos las palabras reservadas GET, POST, PATCH, DELETE, PUT, HEADER para conectar con la funcion
api.use('/avion', avion)
api.use('/calculadora', calculadora)
api.use('/camarero', camarero)

export default api
