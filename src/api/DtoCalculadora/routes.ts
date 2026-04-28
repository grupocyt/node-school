import { Router } from 'express';
import { ObtenerResultadoFunction, CalcularOperacionFunction } from './calculadora.api';

const DtoCalculadora = Router()

DtoCalculadora.get('/calcular',   ObtenerResultadoFunction)
DtoCalculadora.post('/calcular',  CalcularOperacionFunction)

export default DtoCalculadora