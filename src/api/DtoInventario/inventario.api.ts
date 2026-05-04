import express from 'express'

export async function ObtenerInventarioFunction( req:express.Request, res:express.Response ) {

        const respuesta:string = "Lista de productos en el inventario";

    return res.status(200).send(respuesta)
}

export async function AgregarProductoFunction( req:express.Request, res:express.Response ) {
const respuesta = {
    mensaje:"Usted ha agregado un nuevo producto al inventario. Estos son sus datos",
    almacen:"Almacen principal",
    fechaIngreso:"17PM",
    datosProducto:req.body
}

    return res.status(200).send(respuesta)
}