import { Request, Response } from 'express';

export const SumaFunction = (req: Request, res: Response) => {
    const { a, b } = req.query;
    const resultado = Number(a) + Number(b);
    res.json({ resultado });
};

export const RestaFunction = (req: Request, res: Response) => {
    const { a, b } = req.query;
    const resultado = Number(a) - Number(b);
    res.json({ resultado });
};

export const MultiplicacionFunction = (req: Request, res: Response) => {
    const { a, b } = req.query;
    const resultado = Number(a) * Number(b);
    res.json({ resultado });
};

export const DivisionFunction = (req: Request, res: Response) => {
    const { a, b } = req.query;
    if (Number(b) === 0) return res.status(400).json({ error: 'No se puede dividir entre 0' });
    const resultado = Number(a) / Number(b);
    res.json({ resultado });
};