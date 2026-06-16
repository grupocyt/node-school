import express from 'express'
import { peliculasController } from '../../controllers/Peliculas/peliculas.controller'

export async function ObtenerInfoPelicula( req:express.Request, res:express.Response ) {
    const controlador = await new peliculasController().obtenerinfopelicula()
    return res.status(200).send(controlador)
}

export async function ObtenerSinopsisPelicula( req:express.Request, res:express.Response ) {
    const controlador = await new peliculasController().ObtenerSinopsisPelicula()
    return res.status(200).send(controlador)
}

export async function ObtenerPrecioPelicula( req:express.Request, res:express.Response ) {
    const controlador = await new peliculasController().ObtenerPrecioPelicula()
    return res.status(200).send(controlador)
}

export async function obtenercalificacionedad( req:express.Request, res:express.Response ) {
    const controlador = await new peliculasController().ObtenerCalificacionEdad()
    return res.status(200).send(controlador)
}