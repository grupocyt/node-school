import express from 'express'

import { MoteroController } from '../../controllers/motero/motero.controller';

export class MoteroApi {

    async registrarMotero( req:express.Request, res:express.Response ) {  
        const controlador = await new MoteroController().registrarMotero(req.body.nombre)
        return res.status(200).send(controlador)
    }

    async sacarMoteroDelGrupo( req:express.Request, res:express.Response ) {
        const controlador = await new MoteroController().sacarDelGrupo(req.body.nombre)
        return res.status(200).send(controlador)
    }

    async obtenerInfoMotero( req:express.Request, res:express.Response ) {
        const controlador = await new MoteroController().obtenerInfo(req.body.nombre)
        return res.status(200).send(controlador)
    }

    async repostarMoto( req:express.Request, res:express.Response ) {
        const controlador = await new MoteroController().repostar(req.body.nombre)
        return res.status(200).send(controlador)
    }

    async cambiarLlantas( req:express.Request, res:express.Response ) {
        const controlador =  await new MoteroController().cambiarLlantas(req.body.nombre)
        return res.status(200).send(controlador)
    }

}
