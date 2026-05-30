import express from 'express'

import { AvionController } from '../../controllers/avion/avion.controller';

export class avionApi {

    async registrarAvion( req:express.Request, res:express.Response ) {  
        const controlador = await new AvionController().registrarAvion(req.body.nombre)
        return res.status(200).send(controlador)
    }

    async eliminarAvionDelRegistro( req:express.Request, res:express.Response ) {
        const controlador = await new AvionController().eliminarAvionDelRegistro(req.body.nombre)
        return res.status(200).send(controlador)
    }

    async obtenerInfo( req:express.Request, res:express.Response ) {
        const controlador = await new AvionController().obtenerInfo(req.body.nombre)
        return res.status(200).send(controlador)
    }

    async repostar( req:express.Request, res:express.Response ) {
        const controlador = await new AvionController().repostar(req.body.nombre)
        return res.status(200).send(controlador)
    }
}
