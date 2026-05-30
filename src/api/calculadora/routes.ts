import { Request, Response, Router } from 'express';
import { CalculadoraApi } from './calculadora.api';

const calculadora = Router()

const api = new CalculadoraApi()

calculadora.post('/calculadora/sumar',       (req:Request, res:Response) => api.sumar(req,res))
calculadora.post('/calculadora/restar',      (req:Request, res:Response) => api.restar(req,res))
calculadora.post('/calculadora/multiplicar', (req:Request, res:Response) => api.multiplicar(req,res))
calculadora.post('/calculadora/dividir',     (req:Request, res:Response) => api.dividir(req,res))

export default calculadora