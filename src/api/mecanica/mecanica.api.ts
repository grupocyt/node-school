import express from 'express'
import { MecanicaController } from '../../controllers/Mecanica/mecanica.controller'

export async function ObtenerInfoTallerFunction( req:express.Request, res:express.Response ) {
    const controlador = await new MecanicaController().ObtenerInfoTallerFunction()
    return res.status(200).send(controlador)
}

export async function obtenerinfoduenotaller( req:express.Request, res:express.Response ) {
    const controlador = await new MecanicaController().ObtenerInfoDuenoTallerFunction()
    return res.status(200).send(controlador)
}

export async function obtenerlocalizquierdo(req:express.Request, res:express.Response ){
    const controlador = await new MecanicaController().ObtenerLocalIzquierdoFunction()
    return res.status(200).send(controlador) 
}

export async function obtenerlocalderecho(req:express.Request, res:express.Response ){
    const controlador = await new MecanicaController().ObtenerLocalDerechoFunction()
    return res.status(200).send(controlador)
}

export async function obtenercolordeltaller(req:express.Request, res:express.Response) {
    const controlador = await new MecanicaController().ObtenerColorDelTallerFunction()
    return res.status(200).send(controlador)
}