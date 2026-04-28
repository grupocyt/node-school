import { Router } from 'express';

import { InfoAvionFunction, ObtenerInfoAvionFunction  } from './avion.api';
const avion = Router()

avion.get('/avion',  ObtenerInfoAvionFunction)
avion.post('/avion', InfoAvionFunction)

export default avion