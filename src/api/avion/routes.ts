import { Router } from 'express';

import { DespegarFunction  } from './avion.api';
const avion = Router()

avion.get('/despegar',  DespegarFunction)
 
export default avion