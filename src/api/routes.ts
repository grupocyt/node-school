import { Router } from 'express'
import { verifyToken } from '../decorator/http/protected'
import { checkSchemaRegistrarCupon } from './validations'


import { GetHolaMundoFunction, PostHolaMundoFunction } from '.'
import { GetRegistrarCuponFunction, RegistrarCuponFunction } from './cupon'
 const api = Router()

api.get( "/calculadora", GetHolaMundoFunction )
api.post( "/calculadora", PostHolaMundoFunction )
api.post( "/registrar_cupon", checkSchemaRegistrarCupon, RegistrarCuponFunction )
api.get( "/registrar_cupon", checkSchemaRegistrarCupon, GetRegistrarCuponFunction)
export default api
