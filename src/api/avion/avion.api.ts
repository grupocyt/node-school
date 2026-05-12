import express from 'express'
import { AvionController } from '../../controllers/viajes/avion.controller'

export async function DespegarFunction( req:express.Request, res:express.Response ) {

    const controlador =  await new AvionController().despegar('AVIANCA')
 
    return res.status(200).send(controlador)
}

 