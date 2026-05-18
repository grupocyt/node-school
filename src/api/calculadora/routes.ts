import { Router } from 'express';
import { ObtenerResultadoFunction, CalcularOperacionFunction } from './calculadora.api';

const calculadora = Router()

calculadora.get('/calcular',   ObtenerResultadoFunction)
calculadora.post('/calcular',  CalcularOperacionFunction)

export default calculadora