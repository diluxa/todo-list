//variaveis cabecalho
let botaoAtualizar,dataAtual;

botaoAtualizar = document.querySelector('.cabecalho__atualizar');
dataAtual = document.querySelector('.cabecalho__titulo');

//variaveis corpo
let listaTarefas;

listaTarefas = document.querySelector('.corpo__lista');

//variaveis rodape
let campoTexto,botaoAdicionar;

campoTexto = document.querySelector('.rodape__campo-texto');
botaoAdicionar = document.querySelector('.rodape__botao-adicionar');

//funcao pega valor do campo texto
function pegaValorDoCampoTexto() {
    return campoTexto.value;
};
//funcao cria li
function criaLi() {
    let elementosLi =  `<li class="corpo__item">
                        <i class="corpo__icone-circulo far fa-circle"></i>
                        <span class="corpo__paragrafo">${pegaValorDoCampoTexto()}</span>
                        <i class="corpo__icone-lixo far fa-trash-alt"></i>
                        </li>`;
    listaTarefas.insertAdjacentHTML('beforeend',elementosLi);
    campoTexto.value = '';
};
//funcao adicona nova li na lista no clique
function adicionaNovaLinaListaNoClique() {
    if(campoTexto.value.length > 0){
        criaLi();
    };
};
//funcao adicona nova li na lista no Enter
function adicionaNovaLinaListaNoEnter(event) {
    if(campoTexto.value.length > 0 && event.keyCode === 13){
        criaLi();
    };
};
//funcao confere icone circulo se marcado
function confereIconeCirculoSeMarcado(event) {
    let iconeCirculo = event.target;
    if(iconeCirculo.attributes[0].textContent.indexOf('circulo') !== -1) {
        iconeCirculo.classList.toggle('fa-circle');
        iconeCirculo.classList.toggle('fa-check-circle');
    };
};
//funcao deleta tarefa da lista
function deletaTarefaDaLista(event) {
    let itemLixo = event.target;
    if(itemLixo.attributes[0].textContent.indexOf('lixo') !== -1) {
        itemLixo.offsetParent.remove();
    };
};
//funcao formata Data
function formataData() {
    let novaData = new Date();
    let diaSemana;
    let diaMes = novaData.getDate()
    let mes;
    let dataFormatada;
    switch(novaData.getMonth()) {
        case 0:
            mes = "Janeiro";
            break;
        case 1:
            mes = "Fevereiro";
            break;
        case 2:
            mes = "Março";
            break;
        case 3:
            mes = "Abril";
            break;
        case 4:
            mes = "Maio";
            break;
        case 5:
            mes = "Junho";
            break;
        case 6:
            mes = "Julho";
            break;
        case 7:
            mes = "Agosto";
            break;
        case 8:
            mes = "Setembro";
            break;
        case 9:
            mes = "Outubro";
            break;
        case 10:
            mes = "Novembro";
            break;
        case 11:
            mes = "Dezembro";
    };
    switch(novaData.getDay()) {
        case 0:
            diaSemana = "Domingo";
            break;
        case 1:
            diaSemana = "Segunda";
            break;
        case 2:
            diaSemana = "Terça";
            break;
        case 3:
            diaSemana = "Quarta";
            break;
        case 4:
            diaSemana = "Quinta";
            break;
        case 5:
            diaSemana = "Sexta";
            break;
        case 6:
            diaSemana = "Sábado";
            break;
    };
    dataFormatada = diaSemana+', '+diaMes+' de '+mes;
    return dataFormatada;
};

//invocações
dataAtual.innerHTML = formataData();

//eventos
botaoAdicionar.addEventListener('click',adicionaNovaLinaListaNoClique);
campoTexto.addEventListener('keypress',adicionaNovaLinaListaNoEnter);
listaTarefas.addEventListener('click',confereIconeCirculoSeMarcado);
listaTarefas.addEventListener('click',deletaTarefaDaLista);