import { Request, Response, Router } from 'express';
import { CamareroApi } from './camarero.api';

const camarero = Router()

const api = new CamareroApi()

camarero.get('/camarero',                          (req:Request, res:Response) => api.obtenerCamarero(req,res))
camarero.get('/camarero/horario',                  (req:Request, res:Response) => api.obtenerHorarioCamarero(req,res))
camarero.get('/camarero/puesto',                   (req:Request, res:Response) => api.obtenerPuestoDelCamarero(req,res))
camarero.get('/camarero/funciones',                (req:Request, res:Response) => api.obtenerFuncionesDelCamarero(req,res))

export default camarero
