import { Router } from 'express';
import {
    ObtenerEmpleadosFunction,
    ObtenerEmpleadoFunction,
    CrearEmpleadoFunction,
    EliminarEmpleadoFunction
} from './archivero.RecursosHumanos';

const DtoRecursosHumanos = Router();

DtoRecursosHumanos.get('/',         ObtenerEmpleadosFunction);
DtoRecursosHumanos.get('/:id',      ObtenerEmpleadoFunction);
DtoRecursosHumanos.post('/',        CrearEmpleadoFunction);
DtoRecursosHumanos.delete('/:id',   EliminarEmpleadoFunction);

export default DtoRecursosHumanos;