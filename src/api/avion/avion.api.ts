import express from 'express'

export async function InfoAvionFunction( req:express.Request, res:express.Response ) {

        const respuesta:string = "informacion del avion solicitado";

    return res.status(200).send(respuesta)
}

export async function ObtenerInfoAvionFunction( req:express.Request, res:express.Response ) {
const respuesta = {
    mensaje:"Usted ha solicitado informacion del avion",
    almacen:"Almacen principal",
    fechaIngreso:"17PM",
    infoavion:"737 MAX",
    tipo:"Fuselaje estrecho",
    Usoprincipal:"Rutas cortas/medias",

    datosProducto:req.body
}

    return res.status(200).send(respuesta)
}