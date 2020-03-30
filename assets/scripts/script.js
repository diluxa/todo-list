//variaveis cabecalho
let botaoAtualizar;

botaoAtualizar = document.querySelector('.cabecalho__atualizar');

//variaveis corpo
let listaTarefas,botaoIconeCirculo,botaoIconeLixo;

listaTarefas = document.querySelector('.corpo__lista');
botaoIconeCirculo = document.querySelector('.corpo__icone-circulo');
botaoIconeLixo = document.querySelector('.corpo__icone-lixo');

//variaveis rodape
let campoTexto,botaoAdicionar;

campoTexto = document.querySelector('.rodape__campo-texto');
botaoAdicionar = document.querySelector('.rodape__botao-adicionar');

//funcao pega valor do campo texto
function pegaValorDoCampoTexto() {
    return campoTexto.value;
}
//funcao cria li
function criaLi() {
    let elementosLi =  `<li class="corpo__item">
                        <i class="corpo__icone-circulo far fa-circle"></i>
                        <span class="corpo__paragrafo">${pegaValorDoCampoTexto()}</span>
                        <i class="corpo__icone-lixo far fa-trash-alt"></i>
                        </li>`
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

botaoAdicionar.addEventListener('click',adicionaNovaLinaListaNoClique);
campoTexto.addEventListener('keypress',adicionaNovaLinaListaNoEnter);