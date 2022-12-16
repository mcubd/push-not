import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createServer } from "http";



var __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const httpServer = createServer(app);

httpServer.listen(process.env.PORT || 8000);
app.use('/',express.static(__dirname+'/views'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



app.get('/',async (req, res) => {

     
       res.sendFile(__dirname+'/1.html')  
}) 







app.get('/firebase-messaging-sw.js', (req, res) => {

     
    res.sendFile(__dirname+'/sw.js')  
}) 

app.get('/h.js', (req, res) => {

     
    res.sendFile(__dirname+'/sw.js')  
}) 