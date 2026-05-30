import express from 'express'

import { recursosHumanosController} from '../../controllers/recursoshumanos/recursos-humanos.controller';

export class recursosApi {

        async añadirEmpleado( req:express.Request, res:express.Response ) {  
            const controlador = await new recursosHumanosController().añadirEmpleado(req.body.nombre)
            return res.status(200).send(controlador)
        }
    
        async obtenerDatosEmpleado( req:express.Request, res:express.Response ) {
            const controlador = await new recursosHumanosController().obtenerDatosEmpleado(req.body.nombre)
            return res.status(200).send(controlador)
        }
    
        async modificarDatosEmpleado( req:express.Request, res:express.Response ) {
            const controlador = await new recursosHumanosController().modificarDatosEmpleado(req.body.nombre)
            return res.status(200).send(controlador)
        }
    
        async eliminarEmpleado( req:express.Request, res:express.Response ) {
            const controlador = await new recursosHumanosController().eliminarEmpleado(req.body.nombre)
            return res.status(200).send(controlador)
        }
        
        async nominaEmpleado( req:express.Request, res:express.Response ) {
            const controlador = await new recursosHumanosController().nominaEmpleado(req.body.nombre)
            return res.status(200).send(controlador)
        }

    }
    