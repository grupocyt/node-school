import { Router } from 'express';
import { ComprarVueloMadridBarcelonaFunction, MadridBarcelonafunction } from './viaje.api';

const viaje = Router()
 
// 2 forma "rutas": utilizamos las palabras reservadas GET, POST, PATCH, DELETE, PUT, HEADER para conectar con la funcion
viaje.get('/ma-bc', MadridBarcelonafunction)
viaje.post('/ma-bc', ComprarVueloMadridBarcelonaFunction)
 
export default viaje