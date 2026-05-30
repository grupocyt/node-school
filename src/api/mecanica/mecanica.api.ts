import express from 'express'
import { MecanicaController } from '../../controllers/mecanica/mecanica.controller'

export class MecanicaApi {

    async obtenerInfoTaller( req:express.Request, res:express.Response ) {
        const controlador = await new MecanicaController().obtenerInfoTaller(req.body.nombre)
        return res.status(200).send(controlador)
    }

    async obtenerInfoDuenoTaller( req:express.Request, res:express.Response ) {
        const controlador = await new MecanicaController().obtenerInfoDuenoTaller(req.body.nombre)
        return res.status(200).send(controlador)
    }

    async obtenerLocalIzquierdo(req:express.Request, res:express.Response ){
        const controlador = await new MecanicaController().obtenerLocalIzquierdo(req.body.nombre)
        return res.status(200).send(controlador) 
    }

    async obtenerLocalDerecho(req:express.Request, res:express.Response ){
        const controlador = await new MecanicaController().obtenerLocalDerecho(req.body.nombre)
        return res.status(200).send(controlador)
    }

    async obtenerColorDelTaller(req:express.Request, res:express.Response) {
        const controlador = await new MecanicaController().obtenerColorDelTaller(req.body.nombre)
        return res.status(200).send(controlador)
    }
}


