
nomes = [];

var nome = document.getElementsByTagName("input")[0];
var res = document.getElementById("info");
var add = document.getElementById("btnAdd");
var i = nomes.length;
var error = document.getElementById("error");

function salvarNome()
{

    
    if(nome.value === "" || nome.value === 0 ){

        //colocar em baixo do imput
        error.innerHTML = "verifica se os campos não estão vazios!";
        

    }else{
        addNome();
        //console.log(nomes[nomes.length - 1]);
        nome.value = "";
        error.innerHTML = "";
        
    }

}

function addNome(){
    nomes.push(nome.value);
    i = nomes.length - 1;
    //console.log(nomes[nomes.length - 1]);
    console.log(i)
    criarElementos();
}

function remover(){

    if(i < 0 || nomes == ""){
        
        error.innerHTML = "não temos mais participantes cadastrados";

    }else{
        d = document.getElementById("nomes");
        ultimo = nomes.pop();

        console.log(i)
        d.getElementsByTagName('div')[i].remove();

        i = i - 1;
    }

    

    // Removendo todos os nós filhos de um elemento
    /*while(d.firstChild){
        d.removeChild(d.firstChild)
    }*/
}

function sortear(){

    //let error = document.getElementById

    if(nomes != ""){
        let qtd = nomes.length;

    let sorteio = Math.floor(Math.random() * qtd)

    console.log(sorteio);

    res.innerHTML = `<div classe="novo"><h2>O vencedor é:</h2></div>
                     <p>${nomes[sorteio]}</p>`
    }else{

        error.innerHTML = "O sorteio não pode ocorrer, falta particepantes! ";
        
    }
    
    
    
                     
}

// adicionar os elementos,  <div> <h3 <p></p> </h3> </div>

function criarElementos(){


    nDiv = document.createElement("div");
    n1 = document.createElement("h3");
    texto = document.createTextNode(nome.value);

    // adicionando texto no h3
    n1.appendChild(texto);

    // adicionando h3 na div
    nDiv.appendChild(n1)

    // instanciando a div que será colocada a outra div com os resultados
    sorteados = document.getElementById("nomes").appendChild(nDiv);

}