import { Request, Response } from 'express';

export const ObtenerEmpleadosFunction = (req: Request, res: Response) => {
    const empleados = [
        { id: 1, nombre: 'Juan García', puesto: 'Desarrollador', salario: 2000 },
        { id: 2, nombre: 'María López', puesto: 'Diseñadora', salario: 1800 },
        { id: 3, nombre: 'Carlos Martín', puesto: 'Analista', salario: 2200 },
    ];
    res.json(empleados);
};

export const ObtenerEmpleadoFunction = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({ id, nombre: 'Juan García', puesto: 'Desarrollador', salario: 2000 });
};

export const CrearEmpleadoFunction = (req: Request, res: Response) => {
    const { nombre, puesto, salario } = req.body;
    res.status(201).json({ mensaje: 'Empleado creado', nombre, puesto, salario });
};

export const EliminarEmpleadoFunction = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({ mensaje: `Empleado con id ${id} eliminado` });
};