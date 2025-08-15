import express from 'express';
import path from 'path';
import route from './routes/route.js';
import bodyParser from 'body-parser';

const app = express();

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));
// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', route);
app.post('/post',(req,res)=>{
    const{name , Hobby, age}=req.body;
    res.send(`Name: ${name}, Hobby: ${Hobby}, Age: ${age}`)
    console.log(`Name: ${name}, Hobby: ${Hobby}, Age: ${age}`);
});

// Server
app.listen(4000, () => console.log('server up!'));

