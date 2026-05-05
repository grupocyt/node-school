import express from 'express'

export async function RegistrarMoteroFunction( req:express.Request, res:express.Response ) {
    const respuesta:string = "informacion del motero solicitada";
    return res.status(200).send(respuesta)
}

export async function SacarMoteroDelGrupoFunction( req:express.Request, res:express.Response ) {
    const respuesta:string = "motero eliminado del grupo correctamente";
    return res.status(200).send(respuesta)
}

export async function ObtenerInfoMoteroFunction( req:express.Request, res:express.Response ) {
    const respuesta:string = "informacion del motero solicitada";
    return res.status(200).send(respuesta)
}

export async function RepostarMotoFunction( req:express.Request, res:express.Response ) {
    const respuesta:string = "moto repostada correctamente";
    return res.status(200).send(respuesta)
}

export async function CambiarLlantasFunction( req:express.Request, res:express.Response ) {
    const respuesta:string = "Se han cambiado las llantas correctamente";
    return res.status(200).send(respuesta)
}