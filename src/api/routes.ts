import { Router } from 'express';
import avion from './avion/routes';
import calculadora from './calculadora/routes';
import camarero from './camarero/routes';
import inventario from './inventario/routes';
import mecanica from './mecanica/routes';
import motero from './motero/routes';
import pelicula from './pelicula/routes';


const api = Router()
 
// 2 forma "rutas": utilizamos las palabras reservadas GET, POST, PATCH, DELETE, PUT, HEADER para conectar con la funcion
api.use('/avion', avion)
api.use('/calculadora', calculadora)
api.use('/camarero', camarero)
api.use('/inventario', inventario)
api.use('/mecanica', mecanica)
api.use('/motero', motero)
api.use('/pelicula', pelicula)



export default api
