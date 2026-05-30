import express from 'express'

import { inventarioController} from '../../controllers/Inventario/inventario.controller';

export class inventarioApi {

        async obtenerInventario( req:express.Request, res:express.Response ) {  
            const controlador = await new inventarioController().obtenerInventario(req.body.nombre)
            return res.status(200).send(controlador)
        }
    
        async añadirProducto( req:express.Request, res:express.Response ) {
            const controlador = await new inventarioController().añadirProducto(req.body.nombre)
            return res.status(200).send(controlador)
        }
    
        async eliminarProducto( req:express.Request, res:express.Response ) {
            const controlador = await new inventarioController().eliminarProducto(req.body.nombre)
            return res.status(200).send(controlador)
        }
    
        async modificarProducto( req:express.Request, res:express.Response ) {
            const controlador = await new inventarioController().modificarProducto(req.body.nombre)
            return res.status(200).send(controlador)
        }
    }
    