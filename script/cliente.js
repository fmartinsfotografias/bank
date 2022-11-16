//Cliente Tradicional
class Cliente {
  constructor(nome, telefone, cpf, email, saldo, senha) {
    this.nome = nome;
    this.telefone = telefone;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.senha = senha;
  }

  exibirSaldo() {
    console.log(`Seu saldo é de R$ ${this.saldo}`);
    return this.saldo;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de R$ ${valor} realizado com sucesso`);
  }

  salvar(valor) {
    let blob = new Blob([valor], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "relatorio" + ".txt");
  }
}

//Capturando dados da pagina
let captura = document.querySelector("#botao-salvar");
captura.addEventListener("click", function (e) {
  e.preventDefault();

  let nomeCliente = document.querySelector("#nomeCliente").value;
  let telefoneCliente = document.querySelector("#telefoneCliente").value;
  let cpfCliente = document.querySelector("#cpfCliente").value;
  let emailCliente = document.querySelector("#emailCliente").value;
  let saldoCliente = document.querySelector("#saldoCliente").value;
  let saldoFormatado = parseFloat(saldoCliente);
  let senhaCliente = document.querySelector("#senhaCliente").value;

  let cliente = new Cliente(
    nomeCliente,
    telefoneCliente,
    cpfCliente,
    emailCliente,
    saldoFormatado,
    senhaCliente
  );
  console.log(cliente);

  let resultado = document.querySelector("#resultado-cadastro");
  resultado.innerHTML = `Cliente ${cliente.nome} cadastrado com sucesso`;

  cliente.salvar(cliente);

  //Deposito
  let capturaDeposito = document.querySelector("#botao-depositar");
  capturaDeposito.addEventListener("click", function (e) {
    e.preventDefault();

    let valor = document.querySelector("#valor-deposito").value;
    valorFormatado = parseInt(valor);
    cliente.depositar(valorFormatado);
    let resultadoDeposito = document.querySelector("#resultado-deposito");
    resultadoDeposito.innerHTML = `Transferencia de R$ ${valor} realizada com sucesso, 
    Saldo atual de R$ ${cliente.saldo}`;
  });

  let capturaExtrato = document.querySelector("#botao-extrato");
  capturaExtrato.addEventListener("click", function (e) {
    e.preventDefault();

    let resultadoExtrato = document.querySelector("#resultado-extrato");
    let saldo = cliente.exibirSaldo();
    resultadoExtrato.innerHTML = `Seu saldo é de R$ ${saldo}`;
  });
});

/*
//Cliente Poupança
class ClientePoup extends Cliente {
  constructor(nome, telefone, cpf, email, saldo, senha, saldoPoup) {
    super(nome, telefone, cpf, email, saldo, senha);
    this.saldoPoup = saldoPoup;
  }
  depositarPoup(valor) {
    this.saldoPoup += valor;
    console.log(`Deposito de R$ ${this.saldoPoup} realizado com sucesso`);
  }
  exibirSaldoPoup() {
    console.log(`Seu saldo é de R$ ${this.saldoPoup}`);
  }
}*/

/*
//Cliente Investidor
class ClienteVIP extends Cliente {
  constructor(nome, telefone, cpf, email, saldo, saldoTesouroDireto) {
    super(nome, telefone, cpf, email, saldo, saldoTesouroDireto);
    this.saldoTesouroDireto = saldoTesouroDireto;
  }

  depositarTesouro(valor) {
    this.saldoTesouroDireto += valor;
    console.log(`Depósito de R$ ${valor} realizado com sucesso`);
  }
  exibirSaldoTesouro() {
    console.log(
      `Seu investimento no Tesouro Direto é de R$ ${this.saldoTesouroDireto}`
    );
  }
}*/
