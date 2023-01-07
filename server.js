import app from './src/app.js'

import conexao from './infra/conexao.js'

const PORT = 3000

//fazer conexao
conexao.connect((error) =>{

    if (error){
        console.log(error)
    }
    else {
        console.log('Conexão realizada com sucesso!')

        app.listen(PORT,()=>{
            console.log(`servidor rodando no endereço http://localhost:${PORT}`)
        })
    }
})


//escutar a porta 3000


