const form = document.getElementById("formDeposito");
const nomeDoBeneficiario = document.getElementById("nomeBeneficiario"); //const usada na function
let formEValido = false;

function validaNome(nomeCompleto) {
  //Define uma função chamada validaNome que aceita um parâmetro nomeCompleto
  const nomeComoArray = nomeCompleto.split(" "); //transformando em array
  return nomeComoArray.length >= 2; // length conta quantos arrays tem e se for > ou = a 2, o nome esta correto
}

form.addEventListener("submit", function (e) {
  //adciono um evento ao clicar meu botão e crio uma forção
  e.preventDefault(); //Previne o comportamento padrão do formulário de ser acionado, o que evita a atualização da página ao ser submetido

  const numeroContaBeneficiario = document.getElementById("numeroConta"); //const criada pra colocar no texto
  const oValorDepositado = document.getElementById("valorDepositado"); //const criada pra colocar no text
  const textoDaPagina = document.getElementById("textoPagina"); //const criada pra apagar o texto
  const mensagemSucesso = `Montante de: <b>${oValorDepositado.value}</b> depositado para o cliente <b>${nomeDoBeneficiario.value}</b> - conta <b>${numeroContaBeneficiario.value}</b>`; //${} é usada pra colocar um valor ao texto

  formEValido = validaNome(nomeDoBeneficiario.value);
  if (formEValido) {
    const textMesageSuccess = document.querySelector(".success-mesage");
    textMesageSuccess.innerHTML = mensagemSucesso;
    textMesageSuccess.style.display = "block";

    nomeDoBeneficiario.value = " "; //retorna um espaço vazio no form
    numeroContaBeneficiario.value = " ";
    oValorDepositado.value = " ";
    textoDaPagina.value = " ";
  } else {
    nomeDoBeneficiario.style.border = "1px solid red";
    document.querySelector(".error-mesage").style.display = "block";
  }
});

nomeDoBeneficiario.addEventListener("keyup", function (e) {
  console.log(e.target.value);
  formEValido = validaNome(e.target.value);

  if (!formEValido) {
    nomeDoBeneficiario.classList.add("error");
    document.querySelector(".error-mesage").style.display = "block";
  } else {
    nomeDoBeneficiario.classList.remove("error");

    document.querySelector(".error-mesage").style.display = "none";
  }
});
