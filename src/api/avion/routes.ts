import { Request, Response, Router } from 'express';
import { avionApi } from './avion.api';

const avion = Router()

const api = new avionApi()

avion.post('/avion',                  (req:Request, res:Response) => api.registrarAvion(req,res))
avion.delete('/avion',                (req:Request, res:Response) => api.eliminarAvionDelRegistro(req,res))
avion.get('/avions',                  (req:Request, res:Response) => api.obtenerInfo(req,res))
avion.patch('/avion/repostar',        (req:Request, res:Response) => api.repostar(req,res))
 
export default avion