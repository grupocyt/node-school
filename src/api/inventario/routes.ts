import { Router } from 'express';
import { ObtenerInventarioFunction, AgregarProductoFunction } from './inventario.api';

const inventario = Router()

inventario.get('/inventario',  ObtenerInventarioFunction)
inventario.post('/inventario', AgregarProductoFunction)

export default inventario