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







app.get('/firebase-messaging-sw.js',async (req, res) => {

     
    res.sendFile(__dirname+'/sw.js')  
}) 