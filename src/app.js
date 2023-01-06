import express from 'express'

const app = express()

// indicar para o express ler o body com json 
app.use(express.json())

//mock

const selecoes=[
    {id:1,selecao:'Brasil',grupo :'G'},
    {id:2,selecao:'Suíça',grupo :'G'},
    {id:3,selecao:'Sérvia',grupo :'G'},
    {id:4,selecao:'Camarões',grupo :'G'},
]

function buscarSelecaoPorId(id) {
    return selecoes.filter(selecao => selecao.id ==id)

}

function buscarIndexSelecao(id) {
    return selecoes.findIndex(selecao => selecao.id==id)
}

// criar rota padrão ou raiz

app.get('/',(req,res)=>{

    res.send('Olá mundo!');

})


app.get('/selecoes',(req,res) =>{

    res.status(200).send(selecoes)

})

app.get('/selecoes/:id',(req,res)=>{
    res.json(buscarSelecaoPorId(req.params.id))
})

app.post('/selecoes', (req,res) =>{

    selecoes.push(req.body)
    res.status(201).send('seleção cadastrada com sucesso!')

})

app.delete('/selecoes/:id',(req,res)=>{
    
    selecoes.splice(buscarIndexSelecao(req.params.id),1)
    res.status(201).send(`seleção com ${req.params.id} deletada com sucesso!`)
})

export default app