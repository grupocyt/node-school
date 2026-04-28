import { Router } from 'express';
import { ObtenerResultadoFunction, CalcularOperacionFunction } from './archivero.Calculadora';

const DtoCalculadora = Router()

DtoCalculadora.get('/calcular',   ObtenerResultadoFunction)
DtoCalculadora.post('/calcular',  CalcularOperacionFunction)

export default DtoCalculadora