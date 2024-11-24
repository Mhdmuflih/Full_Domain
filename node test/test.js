// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("enter your name : ", (name)=> {
//     console.log(`you are name is ${name}`);
//     rl.close();
// });

// =====================================================

// readfile sync
// ----------------------
// const fs = require('fs');
// const text = fs.readFileSync('./files/read.txt','utf-8');
// console.log(text);

// =====================================================

// writefile sync
// ----------------------
// const fs = require('fs');
// const content = `all is well in this week is my week ${new Date()} `;
// const write = fs.writeFileSync('./files/write.txt', content);

// =====================================================

// readfile (asynchronusly) and write file aslo asynchronusly
// --------------------------

// const fs = require('fs');
// fs.readFile('./files/read.txt','utf-8', (error,data)=> {
//     if(error){
//         return error
//     }else {
//         console.log(data);
//         fs.writeFile('./files/write.txt', `${data} ${new Date()}`, ()=> {
//             console.log('all is ready');
//         })
//     }
// })

// =====================================================

// normal sever create
// ---------------------------
// const http = require('http');
// const server = http.createServer((req,res)=>{
//     console.log('server is recieved');
// })

// server.listen(3030,()=>{
//     console.log('server is running...')
// })

// =====================================================

// send in params
// --------------------
// url = http://localhost:2020/user/5/10

// const express = require('express');

// const app = express();

// app.get('/user/:id1/:id2', (req,res)=> {
//     const { id1, id2 } = req.params;
//     let sum = Number(id1) + Number(id2);
//     res.send(`sum: ${sum}`);
// })

// app.listen(2020, ()=> {
//     console.log('server is running....');
// });


// send in query
// --------------------
// url = http://localhost:2020/user?id1=5&&id2=10

// const express = require('express');

// const app = express();

// app.get('/user',(req,res) => {
//     console.log('hi');
    
//     const {id1, id2} = req.query;
//     const sum = Number(id1) + Number(id2);
//     res.send(`Sum: ${sum}`);
// })

// app.listen(2020, ()=> {
//     console.log('server is running...');
// });


// =====================================================

// add that application level middleware
// ----------------------------------------
// const express = require('express');
// const app = express();

// app.use((req,res,next)=>{
//     if(req.query.id == 2) {
//         console.log('ok');
//         res.send("set set");
//         next();
//     }else{
//         console.log("failed");
//     }
// })

// app.get('/user', (req,res)=> {

// })

// app.listen(2020, ()=> {
//     console.log("server is running...");
// })



// ================================================================
// interview question
// -------------------------

// const express = require("express");

// const app = express();

// let mid = (req,res,next) => {
//     console.log("this is ok");
//     next();
// }

// app.get('/input',(req, res) => {
//     res.send(`
//         <form action="/data?", method="get">
//             <input type="number" name="num1">
//             <input type="number" name="num2">
//             <button type="submit">Submit</button>
//         </form>
//         `);
// })

// app.get('/data',mid,(req,res)=> {
//     const { num1, num2 } = req.query;
//     let sum = Number(num1) + Number(num2);
//     res.send(`sum of num1: ${num1} + num2: ${num2} = ${sum}`)
// })

// app.listen(2020, () => {
//     console.log("server is running...");
// })



// Emin sir question in full domain in my first week
// ======================================================

// const express = require("express");

// const app = express();

// app.get("/user/:id1/:id2",(req,res)=> {
//     const {id1, id2} = req.params;
//     let sum = id1 + id2;
//     res.status(200).send(`sum: ${sum}`);
// })

// app.listen(2020, ()=> {
//     console.log("server is running...");
// })
















