import { Request, Response, Router } from 'express';
import { recursosApi } from './recursos.humanos.api';
 
const recursosHumanos = Router()

const api = new recursosApi()

recursosHumanos.post('/Autobus',                              (req:Request, res:Response) => api.añadirEmpleado(req,res))
recursosHumanos.get('/Autobus',                              (req:Request, res:Response) => api.obtenerDatosEmpleado(req,res))
recursosHumanos.patch('/Autobus',                              (req:Request, res:Response) => api.modificarDatosEmpleado(req,res))
recursosHumanos.delete('/Autobus',                              (req:Request, res:Response) => api.eliminarEmpleado(req,res))
recursosHumanos.get('/Autobus',                              (req:Request, res:Response) => api.nominaEmpleado(req,res))


export default recursosHumanos