import { Router } from 'express'
import { AllFunction, CreateFunction, RemoveFunction, UpdateFunction } from '.'
import { checkSchemaActualizarUsers, checkSchemaRegistrarUsers, checkSchemEliminarUsers } from './validations'


 const users = Router()

users.get(      "/all"           ,checkSchemaRegistrarUsers,         AllFunction )
users.post(     "/create"        ,checkSchemaRegistrarUsers,         CreateFunction )
users.patch(    "/update"        ,checkSchemaActualizarUsers,        UpdateFunction )
users.post(     "/remove"        ,checkSchemEliminarUsers,           RemoveFunction )

export default users
