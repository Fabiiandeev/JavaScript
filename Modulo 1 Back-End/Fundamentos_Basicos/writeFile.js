const fs = require('fs');
const erro = ('Deu Erro ao Cadastrar Cliente');
fs.writeFile('D:\JavaScript\NovoArquivo.txt', erro, () => {
    console.log('Arquivo criado com sucesso');
}); ''