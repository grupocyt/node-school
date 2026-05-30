import express from 'express'

import { CalculadoraController } from '../../controllers/calculadora/calculadora.controller';

export class CalculadoraApi {

    async sumar( req:express.Request, res:express.Response ) {
        const controlador = await new CalculadoraController().sumar(req.body.num1, req.body.num2)
        return res.status(200).send(controlador)
    }

    async restar( req:express.Request, res:express.Response ) {
        const controlador = await new CalculadoraController().restar(req.body.num1, req.body.num2)
        return res.status(200).send(controlador)
    }

    async multiplicar( req:express.Request, res:express.Response ) {
        const controlador = await new CalculadoraController().multiplicar(req.body.num1, req.body.num2)
        return res.status(200).send(controlador)
    }

    async dividir( req:express.Request, res:express.Response ) {
        const controlador = await new CalculadoraController().dividir(req.body.num1, req.body.num2)
        return res.status(200).send(controlador)
    }

}