 //Aquí encontramos carpetas organizada por módulos.
 import { Router } from 'express'

import viajes from './viajes/routes';
import traducciones from './traducciones/routes';

import DtoCalculadora from './DtoCalculadora/routes';
import DtoRecursosHumanos from './Dto.RecursosHumanos/routes.DtoRecursosHumanos';
import DtoInventario from './DtoInventario/routes';


// Se define de 2 maneras según el enrutamiento de la aplicación 
const api = Router()

// 1 forma "modulos" : Utilizamos la palabra reservada use('/modulo' , modulo )  
api.use('/viajes', viajes )
api.use('/traducciones',  traducciones)
api.use('/DtoCalculadora', DtoCalculadora);
api.use('/DtoRecursosHumanos', DtoRecursosHumanos)
api.use('/DtoInventario', DtoInventario)
             
export default api
