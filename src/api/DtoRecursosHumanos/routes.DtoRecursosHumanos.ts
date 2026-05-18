import { Router } from 'express';
import { ObtenerEmpleadosFunction, ContratarEmpleadoFunction } from './archivero.RecursosHumanos';

const DtoRecursosHumanos = Router()

DtoRecursosHumanos.get('/empleados', ObtenerEmpleadosFunction)
DtoRecursosHumanos.post('/empleados', ContratarEmpleadoFunction)

export default DtoRecursosHumanos