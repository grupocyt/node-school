import express from 'express'

import { traduccionController} from '../../controllers/traductor/traduccion.controller';

export class traduccionApi {

        async holaTraduccion( req:express.Request, res:express.Response ) {  
            const controlador = await new traduccionController().holaTraduccion(req.body.nombre)
            return res.status(200).send(controlador)
        }
    
        async comoEstasTraduccion( req:express.Request, res:express.Response ) {
            const controlador = await new traduccionController().comoEstasTraduccion(req.body.nombre)
            return res.status(200).send(controlador)
        }
    
        async queEdadTienesTraduccion( req:express.Request, res:express.Response ) {
            const controlador = await new traduccionController().queEdadTienesTraduccion(req.body.nombre)
            return res.status(200).send(controlador)
        }
    
        async estasLocoTraduccion( req:express.Request, res:express.Response ) {
            const controlador = await new traduccionController().estasLocoTraduccion(req.body.nombre)
            return res.status(200).send(controlador)
        }
    }
    