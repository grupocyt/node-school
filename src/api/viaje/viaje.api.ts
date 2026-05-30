import express from 'express'

import { viajesController} from '../../controllers/viajes/viajes.controller';

export class viajesApi {

        async despegar( req:express.Request, res:express.Response ) {  
            const controlador = await new viajesController().despegar(req.body.nombre)
            return res.status(200).send(controlador)
        }
    
        async aterrizar( req:express.Request, res:express.Response ) {
            const controlador = await new viajesController().aterrizar(req.body.nombre)
            return res.status(200).send(controlador)
        }
    
        async escala( req:express.Request, res:express.Response ) {
            const controlador = await new viajesController().escala(req.body.nombre)
            return res.status(200).send(controlador)
        }
    
        async retraso( req:express.Request, res:express.Response ) {
            const controlador = await new viajesController().retraso(req.body.nombre)
            return res.status(200).send(controlador)
        }
    }
    