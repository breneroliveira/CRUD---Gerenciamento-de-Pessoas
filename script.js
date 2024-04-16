let listaPessoas = [];

// Professor, optei por não usar a função de IDs aleatórios.
// function gerarId() {
//   return Math.floor(Math.random() * 1000);
// }

// Nesse sentido, professor, optei por usar um objeto para criar IDs sequenciais, porque
// fica melhor para usar as funções de atualização e deleção. Dessa forma, os índices são sequenciais, 
// tornando o código mais fácil de debuggar.
const idGenerator = {
  nextId: 0,
  gerarId() {
    return this.nextId++;
  }
};

// CREATE
function cadastrarPessoa(dadosPessoa) {
  const id = idGenerator.gerarId();

  dadosPessoa.id = id;
  listaPessoas.push(dadosPessoa);

  console.log(`Pessoa cadastrada com sucesso! ID: ${id}`);
}

// UPDATE
function atualizarPessoa(id, atualizacao) {
  let pessoaEncontrada = null;

  for (const pessoa of listaPessoas) {
    if (pessoa.id === id) {
      pessoaEncontrada = pessoa;
      break;
    }
  }

  if (!pessoaEncontrada) {
    console.error(`Pessoa com ID ${id} não encontrada.`)
    console.log("Pessoa encontrada: ", pessoaEncontrada);
  } else {
    Object.assign(pessoaEncontrada, atualizacao);
    console.log(`Pessoa atualizada com sucesso! ID: ${id}`);
  }
}

// DELETE
function deletarPessoa(id) {
  const pessoaIndex = listaPessoas.findIndex(pessoa => pessoa.id === id);

  if (pessoaIndex !== -1) {
    listaPessoas.splice(pessoaIndex, 1);

    console.log(`Pessoa removida com sucesso! ID: ${id}`);
  } else {
    console.error(`Pessoa com ID ${id} não encontrada.`);
  }
}

// READ
function listarPessoas() {
  if (listaPessoas.length === 0) {
    console.log("Lista de pessoas vazia.");
  } else {
    console.table(listaPessoas);
  }
}

// Exemplo de uso das funções.
cadastrarPessoa({ nome: "João", idade: 30, cidade: "São Paulo" });
cadastrarPessoa({ nome: "Maria", idade: 25, cidade: "Rio de Janeiro" });

atualizarPessoa(1, { cidade: "Brasília" });

deletarPessoa(1);

const pessoas = listarPessoas();
console.log(pessoas);