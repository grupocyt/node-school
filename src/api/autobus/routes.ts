import { Router } from 'express';
import { ObtenerInfoAutobusFunction, ObtenerInfoEstadoAutobusFunction, ObtenerInfoHorariosFunction, ObtenerInfoRecorridoFunction } from './autobus.api';
 

const autobus = Router()

autobus.get('/ObtenerInfoAutobusFunction',                   ObtenerInfoAutobusFunction)
autobus.get('/ObtenerInfoHorarios',                          ObtenerInfoHorariosFunction)
autobus.get('/ObtenerInfoRecorrido',                         ObtenerInfoRecorridoFunction)
autobus.get('/ObtenerInfoEstadoAutobus',                     ObtenerInfoEstadoAutobusFunction)

export default autobus