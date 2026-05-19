import { Router } from 'express';
import { ObtenerDirTienda, ObtenerInfoHorariosTienda, ObtenerInfoProductos, ObtenerInfoPago } from './shop.api';
import invoicesRoutes from './invoices/routes';
import ordersRoutes from './orders/routes';

const shop = Router();

shop.get('/ObtenerDirTienda',           ObtenerDirTienda)
shop.get('/ObtenerInfoHorariosTienda',  ObtenerInfoHorariosTienda)
shop.get('/ObtenerInfoProductos',       ObtenerInfoProductos)
shop.get('/ObtenerInfoPago',            ObtenerInfoPago)

shop.use('/invoices', invoicesRoutes);
shop.use('/orders',   ordersRoutes);

export default shop;