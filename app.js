const express=require('express');

const app=express();

app.use(express.json());

const alunoRouter=
require('./routes/alunoRouter');

app.use(alunoRouter);


app.listen(3000,()=>{

console.log(
'Servidor rodando na porta 3000'
)

});