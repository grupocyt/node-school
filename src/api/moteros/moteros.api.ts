import express from 'express'

import { MoteroController } from '../../controllers/moteros/moteros.controller';

export async function RegistrarMoteroFunction( req:express.Request, res:express.Response ) {  
    const controlador = await new MoteroController().registrarmotero(req.body.nombre)
    return res.status(200).send(controlador)
}

export async function SacarMoteroDelGrupoFunction( req:express.Request, res:express.Response ) {
    const controlador = await new MoteroController().sacardelgrupo(req.body.nombre)
    return res.status(200).send(controlador)
}

export async function ObtenerInfoMoteroFunction( req:express.Request, res:express.Response ) {
    const controlador = await new MoteroController().obtenerinfo(req.body.nombre)
    return res.status(200).send(controlador)
}

export async function RepostarMotoFunction( req:express.Request, res:express.Response ) {
    const controlador = await new MoteroController().repostar(req.body.nombre)
    return res.status(200).send(controlador)
}

export async function CambiarLlantasFunction( req:express.Request, res:express.Response ) {
    const controlador =  await new MoteroController().cambiarllantas(req.body.nombre)
    return res.status(200).send(controlador)
}