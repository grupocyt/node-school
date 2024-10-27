import express from "express"
import { httpResponse } from "../../utility/https"
import { body, validationResult } from 'express-validator'
import { AllController, RegistrarController } from "../../controllers/users/UserControllers"

export async function AllFunction( req:express.Request, res:express.Response ) {

    const descriptionFunction = `Api Lista usuarios`

    const request = await AllController()
    
    return res.status(200).send(httpResponse(descriptionFunction, 'success', request, null ))
}

export async function CreateFunction( req:express.Request, res:express.Response ) {

    const descriptionFunction = `Api Crear nuevo usuario`

    const request = await RegistrarController ({
        name:"Laura",
        last_name: "Paz",
        age:23
    })
    
    return res.status(200).send(httpResponse(descriptionFunction, 'success', request, null ))
}

export async function UpdateFunction( req:express.Request, res:express.Response ) {

    const descriptionFunction = `Api Crear nuevo usuario`

    const request = "Aqui va mi logica" 
    
    return res.status(200).send(httpResponse(descriptionFunction, 'success', request, null ))
}

export async function RemoveFunction( req:express.Request, res:express.Response ) {

    const descriptionFunction = `Api Crear nuevo usuario`

    const request = "Aqui va mi logica" 
    
    return res.status(200).send(httpResponse(descriptionFunction, 'success', request, null ))
}
