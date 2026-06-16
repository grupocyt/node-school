import express from 'express'
import { autobuscontroller } from '../../controllers/autobus/autobus.controller'

export async function ObtenerInfoAutobusFunction ( req:express.Request, res:express.Response ) {
    const controlador =  await new autobuscontroller().ObtenerInfoAutobus()
    return res.status(200).send(controlador)
}

export async function ObtenerInfoHorariosFunction ( req:express.Request, res:express.Response ) {
    const controlador = await new autobuscontroller().ObtenerInfoHorarios()
    return res.status(200).send(controlador)
}

export async function ObtenerInfoEstadoAutobusFunction( req:express.Request, res:express.Response ) {
    const controlador = await new autobuscontroller().ObtenerInfoEstadoAutobus()
    return res.status(200).send(controlador)
}

export async function ObtenerInfoRecorridoFunction( req:express.Request, res:express.Response ) {
    const controlador = await new autobuscontroller().ObtenerInfoRecorrido()
    return res.status(200).send(controlador)
}
