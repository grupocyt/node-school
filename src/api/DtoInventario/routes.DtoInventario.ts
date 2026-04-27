import { Router } from 'express';
import { ObtenerInventarioFunction, AgregarProductoFunction } from './archivero.Inventario';

const DtoInventario = Router()

DtoInventario.get('/inventario',  ObtenerInventarioFunction)
DtoInventario.post('/inventario', AgregarProductoFunction)

export default DtoInventario