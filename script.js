//Math.random() retorna um num pseudo aleatório maior que 0 e menor que 1
//multiplica-se por 11 para que o numero seja >=0 e <=10
//A variavel fora da função só é exexutado quando recarrega a pagina.

var nSecreto = parseInt(Math.random() * 11);
console.log("O número Secreto é " + nSecreto);
var tentativa = 3;
var tent = document.getElementById("tentativas");

function Chutar() {
  var nInserido = document.getElementById("valor");
  var resposta = document.getElementById("resultado");
  var nEscolhido = parseInt(nInserido.value);
  nInserido.value = "";

  console.log(nEscolhido);

  if (isNaN(nEscolhido)) {
    document.getElementById("tentativas").innerHTML = "Digite um número!";
    return;
  }
  if (nSecreto === nEscolhido) {
    resposta.innerHTML = "Uau, você Acertou! Tente advinhar mais uma vez";
    return;
  } else if (nEscolhido > 10 || nEscolhido < 0) {
    resposta.innerHTML = "digite um valor entre 0 e 10!";
  } else {
    if (nEscolhido < nSecreto) {
      resposta.innerHTML = "O número secreto é maior que " + nEscolhido;
    } else {
      resposta.innerHTML = "O número secreto é menor que " + nEscolhido;
    }
  }

  tentativa -= 1;
  tent.innerHTML = "Você tem " + tentativa + " tentativas.";

  if (tentativa <= 0) {
    tent.innerHTML = "Você não tem mais tentativas";
    return;
  }
}
function resetar() {
  document.getElementById("valor").value = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("tentativas").innerHTML = "";
  tentativa = 3;
  nSecreto = parseInt(Math.random() * 11);
  console.log("numero secreto é " + nSecreto);
}
function botaoEnter(e) {
  var key = e.keyCode || e.which;
  if (key == 13) {
    Chutar();
  }
}