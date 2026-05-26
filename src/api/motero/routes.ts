import { Request, Response, Router } from 'express';
import { MoteroApi } from './motero.api';

const motero = Router()

const api = new MoteroApi()

motero.get('/moteros',                  (req:Request, res:Response) => api.registrarMotero(req,res))
motero.post('/moteros',                 (req:Request, res:Response) => api.sacarMoteroDelGrupo(req,res))
motero.delete('/moteros',               (req:Request, res:Response) => api.obtenerInfoMotero(req,res))
motero.patch('/moteros/repostar',       (req:Request, res:Response) => api.repostarMoto(req,res))
motero.patch('/moteros/llantas',        (req:Request, res:Response) => api.cambiarLlantas(req,res))

export default motero
