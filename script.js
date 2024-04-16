let listaPessoas = [];

function gerarId() {
  return Math.floor(Math.random() * 1000);
}

// CREATE
function cadastrarPessoa(dadosPessoa) {
  const id = gerarId();

  dadosPessoa.id = id;
  listaPessoas.push(dadosPessoa);

  console.log(`Pessoa cadastrada com sucesso! ID: ${id}`);
}

// UPDATE
function atualizarPessoa(id, dadosAtualizados) {
    for (let index = 0; index < listaPessoas.length; index++) {
        const pessoa = listaPessoas[index];
        if (pessoa.id === id) {
            listaPessoas[index] = { ...pessoa, ...dadosAtualizados };
            console.log(`Pessoa atualizada com sucesso! ID: ${id}`);
        } else {
            console.error(`Pessoa com ID ${id} não encontrada.`);
        }
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

//deletarPessoa(2);

const pessoas = listarPessoas();
console.log(pessoas);