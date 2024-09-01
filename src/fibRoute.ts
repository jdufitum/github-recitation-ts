import { Request, Response } from "express";
import { fibonacci } from "./fib";


import * as AllImports from "./fib"; 

import { Request, Response } from 'express';

export default (req: Request, res: Response): void => {
  const num: string = req.params.num;

  const fibN: number = AllImports.fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);

};