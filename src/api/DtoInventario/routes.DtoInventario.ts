import { Router } from 'express';
import {
    ObtenerProductosFunction,
    ObtenerProductoFunction,
    CrearProductoFunction,
    ActualizarStockFunction,
    EliminarProductoFunction
} from './archivero.Inventario';

const DtoInventario = Router();

DtoInventario.get('/',          ObtenerProductosFunction);
DtoInventario.get('/:id',       ObtenerProductoFunction);
DtoInventario.post('/',         CrearProductoFunction);
DtoInventario.put('/:id',       ActualizarStockFunction);
DtoInventario.delete('/:id',    EliminarProductoFunction);

export default DtoInventario;