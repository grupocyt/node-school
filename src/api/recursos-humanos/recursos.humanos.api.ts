import express from 'express'

export async function ObtenerEmpleadosFunction( req:express.Request, res:express.Response ) {

        const respuesta:string = "Lista de empleados de Recursos Humanos";

    return res.status(200).send(respuesta)
}

export async function ContratarEmpleadoFunction( req:express.Request, res:express.Response ) {
const respuesta = {
    mensaje:"Usted ha contratado a un nuevo empleado. Estos son sus datos",
    departamento:"Recursos Humanos",
    fechaInicio:"17PM",
    datosEmpleado:req.body
}

    return res.status(200).send(respuesta)
}