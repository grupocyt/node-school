import express from 'express'
import { camareroscontroller } from '../../controllers/Camareros/camareros.controller'

export async function obtenerinfocamarero( req:express.Request, res:express.Response ) {
    const controlador = await new camareroscontroller().ObtenerInfoCamareroFunction()
    return res.status(200).send(controlador)
}

export async function obtenerinfohorariocamarero( req:express.Request, res:express.Response ) {
    const controlador = await new camareroscontroller().ObtenerInfoHorarioCamareroFunction()
    return res.status(200).send(controlador)
}

export async function obtenerinfofuncionesdelcamarero( req:express.Request, res:express.Response ) {
    const controlador = await new camareroscontroller().ObtenerInfoFuncionesDelCamareroFunction()
    return res.status(200).send(controlador)
}

export async function obtenerinfopuestodelcamarero( req:express.Request, res:express.Response ) {
    const controlador = await new camareroscontroller().ObtenerInfoPuestoDelCamareroFunction()
    return res.status(200).send(controlador)
}