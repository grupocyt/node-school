import { Request, Response, Router } from 'express';
import { inventarioApi } from './inventario.api';
 
const Inventario = Router()

const api = new inventarioApi()

Inventario.get('/inventario/obtener',                             (req:Request, res:Response) => api.obtenerInventario(req,res))
Inventario.get('/inventario/añadir',                              (req:Request, res:Response) => api.añadirProducto(req,res))
Inventario.get('/inventario/eliminar',                            (req:Request, res:Response) => api.eliminarProducto(req,res))
Inventario.get('/inventario/modificar',                           (req:Request, res:Response) => api.modificarProducto(req,res))

export default Inventario