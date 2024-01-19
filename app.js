function calcularMedia() {

    let nota1 = parseInt(document.getElementById('nota1').value);
    let nota2 = parseInt(document.getElementById('nota2').value);
    let nota3 = parseInt(document.getElementById('nota3').value);
    let nota4 = parseInt(document.getElementById('nota4').value);

    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    document.getElementById('reiniciar').removeAttribute('disabled');
    return media >= 5 ? exibirTextoNaTela('h2', `Aprovado com média ${media}`) : exibirTextoNaTela('h2', `Reprovado com média ${media}`);
}

exibirMensagemInicial();

function exibirTextoNaTela(tag, texto) {

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {

    exibirTextoNaTela('h1', 'Calculadora de Media');
    exibirTextoNaTela('p', 'Digite as notas');
    exibirTextoNaTela('h2', '');
}

function limparCampo() {

    document.getElementById('nota1').value = "";
    document.getElementById('nota2').value = "";
    document.getElementById('nota3').value = "";
    document.getElementById('nota4').value = "";
}

function novoCalculo() {

    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}