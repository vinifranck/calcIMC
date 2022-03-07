let btn = document.getElementById('calcular');
let tabela = document.querySelector('table');
function calcularIMC(){
    let nome = document.getElementById("nome").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let imc = peso / (altura * altura);
    let tabela = document.querySelector('tbody');
    
    let linha = document.createElement('tr');
    linha.setAttribute("id", "linha")
    let colunaNome = document.createElement('td');
    colunaNome.innerHTML = nome;

    let colunaPeso = document.createElement('td');
    colunaPeso.innerHTML = peso;

    let colunaAltura = document.createElement('td');
    colunaAltura.innerHTML = altura;
    let classImc
    if(imc<18.4){
        classImc=(" Abaixo do Peso")
    }else if(imc>=18.5 && imc<=24.9){
        classImc=(" Peso normal")
    }else if(imc>=25 && imc <=29.9){
        classImc=(" Sobrepeso")
    }else if(imc>=30 && imc<=34.9){
        classImc=(" Obseidade Grau 1")
    }else if(imc>=35 && imc<=39.9){
        classImc=(" Obesidade Grau 2")
    }else if(imc>=40){
        classImc=(" Obesidade grau 3 ou Mórbida")
    }
    let colunaIMC = document.createElement('td');
    colunaIMC.innerHTML = (imc.toFixed(2)+classImc);

    linha.appendChild(colunaNome);
    linha.appendChild(colunaPeso);
    linha.appendChild(colunaAltura);
    linha.appendChild(colunaIMC);
  
    tabela.appendChild(linha);
}

function addDados(event){
    event.preventDefault();
    calcularIMC();
    nome.value = "";
    peso.value = "";
    altura.value = "";
}
btn.addEventListener('click', addDados);

