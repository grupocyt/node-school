import { checkSchema } from "express-validator"

export const checkSchemaRegistrarCupon = checkSchema({
    registro_email: { // Valida el campo
        errorMessage: 'El formato del correo electrónico no es válido: ',
        isEmail: true,
    }
     
})
