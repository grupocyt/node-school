import { Router } from 'express';
import { obtenerinfoautobusfunction, obtenerinfoestadoautobusfunction, obtenerinfohorariosfunction, obtenerinforecorridofunction } from './autobus.api';
 

const autobus = Router()

autobus.get('/obtenerinfoautobusfunction',                   obtenerinfoautobusfunction)
autobus.get('/obtenerinfohorarios',                          obtenerinfohorariosfunction)
autobus.get('/obtenerinforecorrido',                          obtenerinforecorridofunction)
autobus.get('/obtenerinfoestadoautobus',                      obtenerinfoestadoautobusfunction)

export default autobus