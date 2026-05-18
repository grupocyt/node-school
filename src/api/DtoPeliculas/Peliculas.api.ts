import express from 'express'
import { peliculasController } from '../../controllers/Peliculas/peliculas.controller'

export async function obtenerinfopelicula( req:express.Request, res:express.Response ) {
    const controlador = await new peliculasController().obtenerinfopelicula()
    return res.status(200).send(controlador)
}

export async function obtenersinopsispelicula( req:express.Request, res:express.Response ) {
    const controlador = await new peliculasController().obtenersinopsispelicula()
    return res.status(200).send(controlador)
}

export async function obtenerpreciopelicula( req:express.Request, res:express.Response ) {
    const controlador = await new peliculasController().obtenerpreciopelicula()
    return res.status(200).send(controlador)
}

export async function obtenercalificacionedad( req:express.Request, res:express.Response ) {
    const controlador = await new peliculasController().obtenercalificacionedad()
    return res.status(200).send(controlador)
}