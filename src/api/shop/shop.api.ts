import express from 'express';
import { shopcontroller } from '../../controllers/shop/shop.controller';

export async function ObtenerDirTienda(req: express.Request, res: express.Response) {
    const controlador = await new shopcontroller().ObtenerDirTienda()
    return res.status(200).send(controlador)
}

export async function ObtenerInfoHorariosTienda(req: express.Request, res: express.Response) {
    const controlador = await new shopcontroller().ObtenerInfoHorariosTienda()
    return res.status(200).send(controlador)
}

export async function ObtenerInfoProductos(req: express.Request, res: express.Response) {
    const controlador = await new shopcontroller().ObtenerInfoProductos()
    return res.status(200).send(controlador)
}

export async function ObtenerInfoPago(req: express.Request, res: express.Response) {
    const controlador = await new shopcontroller().ObtenerInfoPago()
    return res.status(200).send(controlador)
}