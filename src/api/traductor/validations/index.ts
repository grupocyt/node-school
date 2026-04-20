import { checkSchema } from "express-validator";

export const checkHola = checkSchema({
    message: {
        errorMessage: 'Invalid message',
        isString: true,
    } 
})

 

