import express from 'express';
import path from 'path';
const app = express();
app.use(express.static('public'));
app.get('/post',(req,res)=>{
res.json({message:'Hello World!'});
}
)
app.get('/basir',(req,res)=>{
res.json({
name:'Basir khan',
dev:"Full Stack Web Developer",
status:'Success',
statuscode:"200"

})
})
app.listen(8080,()=>{
console.log('Server is running on port 8080');
})
