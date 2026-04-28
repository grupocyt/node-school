import express from 'express'

export async function ObtenerResultadoFunction( req:express.Request, res:express.Response ) {

        const respuesta:string = "Resultado de la operacion de la calculadora";

    return res.status(200).send(respuesta)
}

export async function CalcularOperacionFunction( req:express.Request, res:express.Response ) {
const respuesta = {
    mensaje:"Se ha realizado la operacion correctamente. Estos son los datos de la suma ficticia",
    operacion:"Suma",
    resultado:"0",
    datosOperacion:req.body
}

    return res.status(200).send(respuesta)
}