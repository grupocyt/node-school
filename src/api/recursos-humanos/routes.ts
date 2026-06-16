import { Router } from 'express';
import { ObtenerEmpleadosFunction, ContratarEmpleadoFunction } from './recursos.humanos.api';

const recursosHumanos = Router()

recursosHumanos.get('/empleados', ObtenerEmpleadosFunction)
recursosHumanos.post('/empleados', ContratarEmpleadoFunction)

export default recursosHumanos