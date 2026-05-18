import express from 'express'
import { autobuscontroller } from '../../controllers/autobus/autobus.controller'

export async function obtenerinfoautobusfunction ( req:express.Request, res:express.Response ) {
    const controlador =  await new autobuscontroller().obtenerinfoautobus()
    return res.status(200).send(controlador)
}

export async function obtenerinfohorariosfunction ( req:express.Request, res:express.Response ) {
    const controlador = await new autobuscontroller().obtenerinfohorarios()
    return res.status(200).send(controlador)
}

export async function obtenerinfoestadoautobusfunction( req:express.Request, res:express.Response ) {
    const controlador = await new autobuscontroller().obtenerinfoestadoautobus()
    return res.status(200).send(controlador)
}

export async function obtenerinforecorridofunction( req:express.Request, res:express.Response ) {
    const controlador = await new autobuscontroller().obtenerinforecorrido()
    return res.status(200).send(controlador)
}
