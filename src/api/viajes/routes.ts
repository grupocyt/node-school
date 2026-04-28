import { Router } from 'express';
import { ComprarVueloMadridBarcelonaFunction, MadridBarcelonafunction } from './viajes.api';

 const viajes = Router()
 
// 2 forma "rutas": utilizamos las palabras reservadas GET, POST, PATCH, DELETE, PUT, HEADER para conectar con la funcion
viajes.get('/ma-bc', MadridBarcelonafunction)
viajes.post('/ma-bc', ComprarVueloMadridBarcelonaFunction)
 
export default viajes  