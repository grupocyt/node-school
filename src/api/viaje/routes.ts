import { Request, Response, Router } from 'express';
import { viajesApi } from './viaje.api';
 
const viaje = Router()

const api = new viajesApi()

viaje.get('/Despegando',                              (req:Request, res:Response) => api.despegar(req,res))
viaje.get('/Aterrizando',                             (req:Request, res:Response) => api.aterrizar(req,res))
viaje.get('/Con escala',                              (req:Request, res:Response) => api.escala(req,res))
viaje.get('/Con retraso',                             (req:Request, res:Response) => api.retraso(req,res))

export default viaje