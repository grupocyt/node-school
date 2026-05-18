import express from 'express'
import { MecanicaController } from '../../controllers/Mecanica/mecanica.controller'

export async function ObtenerInfoTallerFunction( req:express.Request, res:express.Response ) {
    const controlador = await new MecanicaController().obtenerinfotaller()
    return res.status(200).send(controlador)
}

export async function obtenerinfoduenotaller( req:express.Request, res:express.Response ) {
    const controlador = await new MecanicaController().obtenerinfoduenotaller()
    return res.status(200).send(controlador)
}

export async function obtenerlocalizquierdo(req:express.Request, res:express.Response ){
    const controlador = await new MecanicaController().obtenerlocalizquierdo()
    return res.status(200).send(controlador) 
}

export async function obtenerlocalderecho(req:express.Request, res:express.Response ){
    const controlador = await new MecanicaController().obtenerlocalderecho()
    return res.status(200).send(controlador)
}

export async function obtenercolordeltaller(req:express.Request, res:express.Response) {
    const controlador = await new MecanicaController().obtenercolordeltaller()
    return res.status(200).send(controlador)
}