import { Router } from 'express';
import { MadridBarcelonafunction, ComprarVueloMadridBarcelonaFunction } from './archivero.Viajes';
   
const DtoViajes = Router()
 
DtoViajes.get('/ma-bc', MadridBarcelonafunction)
DtoViajes.post('/ma-bc', ComprarVueloMadridBarcelonaFunction)
 
export default DtoViajes  