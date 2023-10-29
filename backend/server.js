const express= require('express')
const {chats}= require("./data/data")
const dotenv= require("dotenv")

const app = express();
dotenv.config();


app.get('/',(req,res)=>{
    res.send("API Running")
});

app.get('/api/chat', (req,res)=>{
    res.send(chats);
})

const PORT= process.env.PORT||5000
app.listen(5000,console.log("started at port 5000"))