//create folder
//npm init -y
//npm i express
//create instance express
// provide port: 8000
//Basic Route/

// import express from 'express';
// const app = express();
// const port = 8000;

// HTTP METHODS 
//GET => Retrive Data
//Post => Create/Insert Data
//Put => Completely Update Data
//Patch => Partially Update Data
//Delete => Delete Data  
//All => Any HTTP Request Method 

// app.get('/',(req,res)=>{
//     res.send("welcome to my world!");
// });

// Regex 
// regular expression roution /^\/[0-9]{4}$/, 
// app.get(/x/, (req,res)=>{
//     res.send("If the path includes the letter(x) it will work.")
// })

// app.get(
//     "/double-cb",
//     (req,res, next)=>{
//         console.log("first callback");
//         return res.send("first callback");
//         next();// this next function jusmps to next callback funtion
//     },
//     (req,res)=>{
//         res.send("second callback");
//     }
// );

// Post Method

//Http Methods 
// app.get("/student",(req,res)=>{
//     res.send("all students");
// });
// app.post("/student",(req,res)=>{
//     res.send("add new  students");
// });
// app.put("/student",(req,res)=>{
//     res.send("update students");
// });
// app.delete("/student",(req,res)=>{
//     res.send("Delete students");
// });

// app.listen(port, ()=>{
//     console.log("server is up!");
// });

///-----ReFactor 
// App.route()
//1. Create routes folder and put your routes in a seperate  file
//2.Create  instance of express .Router()
//3. Instead of app.method change that to "router.method"
//4. Export router
//5. Import router
//6. Use the (app.use) built-in middleware & provide your routes


//app
// .route('/student')
// .get((req,res)=>res.send("All Student"))
// .post((req,res)=>res.send("Add new Student"))
// .put((req,res)=>res.send("Update Student"))
// .delete((req,res)=>res.send("Delete Student"));


// import express from 'express';
// //import students from './Routes/student.js'
// const app = express();
// const port = 8000;
// // app.use('/students', students);
// // app.use('/teachers', teachers);

// app.get('/product/:category/:id',(req, res)=>{//id => 12 or something

//     const {category,id}=req.params;

    
//     res.send(`product category (${category}) & Product Id (${id})`);
// });
// app.listen(port, ()=>console.log("server is up!"));


// App Parameters 
// import express from  "express";
// const app = express();

// app.param("id", (req, res, next, id)=>{
//     console.log(`id: ${id}`)
//     next()
// });
// app.get("/user/:id", (req, res)=>{
//     console.log("this is userid patn");
//     res.send("Response ok");
// })
// app.listen(8000,()=>console.log("server is up!");


// Controllers 
// import express from 'express';
// import students from './Routers/students.js'
// const app = express();
// app.use("/students", students);
// app.listen(8000,()=> console.log("server up!"));

//HOw to sending our data from backend to frontent

// import express from "express";
// import products from "./products.js";
// const app = express();
// app.get('/products', (req,res)=>{
//     res.json(products)
// });

// app.listen(8000,()=> console.log("server up!"));

// MIDDLEWARE 
// import express from "express";
// import logs from './middlewares/log.js'
// import userCredentials from "./middlewares/log.js";
// const app = express();


// app.use(userCredentials);

// app.get('/',userCredentials, (req,res)=>{
//     res.send("<h1> Hello Admin </h1>");
   
// });

// app.listen(8000,()=> console.log("server up!"));


