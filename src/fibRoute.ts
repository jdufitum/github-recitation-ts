import { fibonacci } from "./fib";



// import fib
// export default function that takes in req, res
// get num from req.params



export default (req, res) => {
    const { num }: { num: string } = req.params;

    const fibN: number = fibonacci(parseInt(num));
    let result: string = "fibonacci(${num}) is ${fibN}";

    if (fibN < 0) {
        result = `fibonacci(${num}) is undefined`;
    }

    res.send(result);
};
