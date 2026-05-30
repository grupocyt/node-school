import express from 'express'

import { autobusController} from '../../controllers/autobus/autobus.controller';

export class autobusApi {

        async obtenerInfoAutobus( req:express.Request, res:express.Response ) {  
            const controlador = await new autobusController().obtenerInfoAutobus(req.body.nombre)
            return res.status(200).send(controlador)
        }
    
        async obtenerInfoHorarios( req:express.Request, res:express.Response ) {
            const controlador = await new autobusController().obtenerInfoHorarios(req.body.nombre)
            return res.status(200).send(controlador)
        }
    
        async obtenerInfoRecorrido( req:express.Request, res:express.Response ) {
            const controlador = await new autobusController().obtenerInfoRecorrido(req.body.nombre)
            return res.status(200).send(controlador)
        }
    
        async obtenerInfoEstadoAutobus( req:express.Request, res:express.Response ) {
            const controlador = await new autobusController().obtenerInfoEstadoAutobus(req.body.nombre)
            return res.status(200).send(controlador)
        }
    }
    