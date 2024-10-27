import express from 'express'
import { httpResponse } from '../utility/https'
import { body, validationResult } from 'express-validator'
 

export async function RegistrarCuponFunction( req:express.Request, res:express.Response ) {

    const descriptionFunction = "Api Registro Cupones"

    const errors = validationResult(req); //Si hay errores y devuelve una respuesta 400 con el mensaje de error
    if (!errors.isEmpty()) {
        return res.status(400).send(httpResponse(descriptionFunction, 'error', null, errors.array()));
    }
    
    const {registro_email} =req.body 
    const request:any = { 
    status:true, 
    data: `El cupon para ${registro_email} se ha registrado correctamente`
  }           // controlador 

   if( !request.status )     
    return res.status(401).send(httpResponse(descriptionFunction, 'error', null, request))

return res.status(200).send(httpResponse(descriptionFunction, 'success', request, null ))
}


export async function GetRegistrarCuponFunction (req:express.Request, res:express.Response ) {
    
    const descriptionFunction = "Api registrar_cupon_ver"

    const errors = validationResult(req); //Si hay errores y devuelve una respuesta 400 con el mensaje de error
    if (!errors.isEmpty()) {
        return res.status(400).send(httpResponse(descriptionFunction, 'error', null, errors.array()));
    }
    const {registro_email} =req.query
    console.log (registro_email)

    const request:any = { 
        status:true, 
        data: registro_email

};


if( !request.status )     
    return res.status(401).send(httpResponse(descriptionFunction, 'error', null, request))

return res.status(200).send(httpResponse(descriptionFunction, 'success', request, null ))
}

