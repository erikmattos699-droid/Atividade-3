const alunos = require('../models/alunoModel');


// GET /alunos
exports.listarAlunos = (req,res)=>{

    return res.status(200).json(alunos);

}


// GET /alunos/:ra
exports.buscarPorRA=(req,res)=>{

    const ra = req.params.ra;

    const aluno = alunos.find(
        a=>a.ra===ra
    );

    if(!aluno){

        return res
        .status(404)
        .json({
            mensagem:"Aluno não encontrado"
        })

    }

    return res.status(200)
    .json(aluno)

}


// GET /alunos/:ra/disciplinas
exports.listarDisciplinas=(req,res)=>{

const ra=req.params.ra;

const aluno=alunos.find(
a=>a.ra===ra
);

if(!aluno){

return res
.status(404)
.json({
mensagem:"Aluno não encontrado"
})

}

return res
.status(200)
.json(aluno.disciplinas)

}



// PUT /alunos/:ra
exports.atualizarAluno = (req,res)=>{

    const ra=req.params.ra;

    const novosDados=req.body;

    const aluno=alunos.find(
        a=>a.ra===ra
    );

    if(!aluno){

        return res.status(404).json({
            mensagem:"Aluno não encontrado"
        });

    }

    aluno.nome=
    novosDados.nome || aluno.nome;

    aluno.disciplinas=
    novosDados.disciplinas || aluno.disciplinas;


    return res.status(200).json({

        mensagem:"Aluno atualizado com sucesso",

        aluno

    });

}