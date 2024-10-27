import { checkSchema } from "express-validator"

export const checkSchemaRegistrarUsers = checkSchema({
    name: { // Valida el campo
        errorMessage: 'El formato del nombre no es válido: ',
        isString: true,
    },

    last_name: { // Valida el campo
        errorMessage: 'El formato del apellido no es válido: ',
        isString: true,
    },
    age: { // Valida el campo
        errorMessage: 'El formato del edad no es válido: ',
        isNumeric: true,
    }
    
}
)

export const checkSchemaActualizarUsers = checkSchema({
    id:{
        errorMessage: 'El id no es válido: ',
        isString: true,
    },

    name: { // Valida el campo
        errorMessage: 'El formato del nombre no es válido: ',
        isString: true,
    },

    last_name: { // Valida el campo
        errorMessage: 'El formato del apellido no es válido: ',
        isString: true,
    },
    age: { // Valida el campo
        errorMessage: 'El formato del edad no es válido: ',
        isNumeric: true,
    }
    
}
)

export const checkSchemEliminarUsers = checkSchema({
    id:{
        errorMessage: 'El id no es válido: ',
        isString: true,
    },

    name: { // Valida el campo
        errorMessage: 'El formato del nombre no es válido: ',
        isString: true,
    },

    last_name: { // Valida el campo
        errorMessage: 'El formato del apellido no es válido: ',
        isString: true,
    },
    age: { // Valida el campo
        errorMessage: 'El formato del edad no es válido: ',
        isNumeric: true,
    }
    
}
)