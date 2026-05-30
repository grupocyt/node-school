import express from 'express'

import { camareroscontroller } from '../../controllers/Camareros/camareros.controller';

export class CamareroApi {

    async obtenerCamarero( req:express.Request, res:express.Response ) {  
        const controlador = await new camareroscontroller().obtenerCamarero(req.body.nombre)
        return res.status(200).send(controlador)
    }

    async obtenerHorarioCamarero( req:express.Request, res:express.Response ) {
        const controlador = await new camareroscontroller().obtenerHorarioCamarero(req.body.nombre)
        return res.status(200).send(controlador)
    }

    async obtenerPuestoDelCamarero( req:express.Request, res:express.Response ) {
        const controlador = await new camareroscontroller().obtenerPuestoDelCamarero(req.body.nombre)
        return res.status(200).send(controlador)
    }

    async obtenerFuncionesDelCamarero( req:express.Request, res:express.Response ) {
        const controlador = await new camareroscontroller().obtenerFuncionesDelCamarero(req.body.nombre)
        return res.status(200).send(controlador)
    }

}
