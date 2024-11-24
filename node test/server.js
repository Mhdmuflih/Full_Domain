const express = require("express");

const app = express();

let mid = (req,res,next) => {
    console.log("this is ok");
    next();
}

app.get('/input',(req, res) => {
    res.send(`
        <form action="/data?", method="get">
            <input type="number" name="num1">
            <input type="number" name="num2">
            <button type="submit">Submit</button>
        </form>
        `);
})

app.get('/data',mid,(req,res)=> {
    const { num1, num2 } = req.query;
    let sum = Number(num1) + Number(num2);
    res.send(`sum of num1: ${num1} + num2: ${num2} = ${sum}`)
})

app.listen(2020, () => {
    console.log("server is running...");
})