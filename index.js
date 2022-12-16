import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createServer } from "http";



var __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const httpServer = createServer(app);

httpServer.listen(process.env.PORT || 8000);

app.get('/',async (req, res) => {

     
       res.sendFile(__dirname+'/1.html')  
}) 

app.get('/service-worker.js',async (req, res) => {

     
    res.sendFile(__dirname+'/service-worker.js')  
}) 

app.get('/fire-app.js',async (req, res) => {

    // res.setHeader('content-type', 'text/javascript');
    // res.contentType('ll');
    res.sendFile(__dirname+'/fire-app.js')  


 
}) 

app.get('/fire-msg.js',async (req, res) => {

     
    res.sendFile(__dirname+'/fire-msg.js')  
}) 

app.get('/z',async (req, res) => {

     
    res.sendFile(__dirname+'/z.js')  
}) 