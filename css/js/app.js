/*
=========================================================
 CREDIT ANALYSIS PRO V4
 app.js
 Desenvolvido para Wagner Bressan
=========================================================
*/

document.addEventListener("DOMContentLoaded", iniciarSistema);

function iniciarSistema(){

    configurarMenu();

    abrirPagina("dashboard");

    mostrarMensagemBoasVindas();

}

function configurarMenu(){

    const botoes = document.querySelectorAll(".menu");

    botoes.forEach(botao=>{

        botao.addEventListener("click",function(){

            botoes.forEach(b=>b.classList.remove("active"));

            this.classList.add("active");

            abrirPagina(this.dataset.page);

        });

    });

}

function abrirPagina(nomePagina){

    // Oculta todas

    document.querySelectorAll(".page").forEach(p=>{

        p.classList.remove("active");

    });

    // Procura a página

    let pagina=document.getElementById(nomePagina);

    if(pagina){

        pagina.classList.add("active");

    }

    atualizarTitulo(nomePagina);

}

function atualizarTitulo(nome){

    const titulo=document.getElementById("tituloPagina");

    switch(nome){

        case "dashboard":
            titulo.innerHTML="Dashboard";
            break;

        case "operacao":
            titulo.innerHTML="Cadastro da Operação";
            break;

        case "dre":
            titulo.innerHTML="DRE Gerencial";
            break;

        case "fluxo":
            titulo.innerHTML="Fluxo de Caixa";
            break;

        case "bacen":
            titulo.innerHTML="Análise BACEN";
            break;

        case "kyc":
            titulo.innerHTML="KYC";
            break;

        case "politica":
            titulo.innerHTML="Política Comercial";
            break;

        case "historico":
            titulo.innerHTML="Histórico";
            break;

        case "config":
            titulo.innerHTML="Configurações";
            break;

    }

}

function mostrarMensagemBoasVindas(){

    console.log("====================================");
    console.log("Credit Analysis Pro V4");
    console.log("Sistema iniciado com sucesso.");
    console.log("====================================");

}

/******************************************************
 Atualização dos Cards do Dashboard
******************************************************/

function atualizarCard(id,valor){

    let card=document.getElementById(id);

    if(card){

        card.innerHTML=valor;

    }

}

/******************************************************
 Utilitário para limpar campos
******************************************************/

function limparFormulario(container){

    let tela=document.getElementById(container);

    if(!tela) return;

    tela.querySelectorAll("input").forEach(c=>{

        c.value="";

    });

    tela.querySelectorAll("textarea").forEach(c=>{

        c.value="";

    });

    tela.querySelectorAll("select").forEach(c=>{

        c.selectedIndex=0;

    });

}

/******************************************************
 Utilitário
******************************************************/

function hoje(){

    let d=new Date();

    return d.toLocaleDateString("pt-BR");

}

/******************************************************
 Futuro
******************************************************/

// Tema Escuro

// Login

// Multiusuário

// Banco Local

// API BACEN

// API Receita Federal

// Integração Power BI
