import { Request, Response } from "express";
import { fibonacci } from "./fib";

// Endpoint for querying the Fibonacci numbers
export default (req: Request, res: Response) => {
    const { num } = req.params as { num: string };

    const parsedNum = parseInt(num);
    if (parsedNum < 0) {
        res.send(`fibonacci(${num}) is undefined`);
        return;
    }

    try {
        const fibN: number = fibonacci(parsedNum);
        const result = `fibonacci(${num}) is ${fibN}`;
        res.send(result);
    } catch (error) {
        const err = error as Error;
        res.status(400).send(`Error: ${err.message}`);
    }
};