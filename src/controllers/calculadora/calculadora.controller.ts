export class CalculadoraController {

    async sumar ( num1:number, num2:number ) : Promise<string> {
        const resultado:number = num1 + num2;
        const respuesta:string = `El resultado de la suma es ${resultado}`;
        return respuesta;
    }

    async restar ( num1:number, num2:number ) : Promise<string> {
        const resultado:number = num1 - num2;
        const respuesta:string = `El resultado de la resta es ${resultado}`;
        return respuesta;
    }

    async multiplicar ( num1:number, num2:number ) : Promise<string> {
        const resultado:number = num1 * num2;
        const respuesta:string = `El resultado de la multiplicacion es ${resultado}`;
        return respuesta;
    }

    async dividir ( num1:number, num2:number ) : Promise<string> {
        const resultado:number = num1 / num2;
        const respuesta:string = `El resultado de la division es ${resultado}`;
        return respuesta;
    }
} 