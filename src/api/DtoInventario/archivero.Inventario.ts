import { Request, Response } from 'express';

export const ObtenerProductosFunction = (req: Request, res: Response) => {
    const productos = [
        { id: 1, nombre: 'Teclado', stock: 15, precio: 25.99 },
        { id: 2, nombre: 'Ratón', stock: 20, precio: 12.50 },
        { id: 3, nombre: 'Monitor', stock: 5, precio: 199.99 },
    ];
    res.json(productos);
};

export const ObtenerProductoFunction = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({ id, nombre: 'Teclado', stock: 15, precio: 25.99 });
};

export const CrearProductoFunction = (req: Request, res: Response) => {
    const { nombre, stock, precio } = req.body;
    res.status(201).json({ mensaje: 'Producto creado', nombre, stock, precio });
};

export const ActualizarStockFunction = (req: Request, res: Response) => {
    const { id } = req.params;
    const { stock } = req.body;
    res.json({ mensaje: `Stock del producto ${id} actualizado a ${stock}` });
};

export const EliminarProductoFunction = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({ mensaje: `Producto con id ${id} eliminado` });
};