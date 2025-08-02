const contenido = document.querySelector('#calculadora')
const botones = document.querySelectorAll('.btn')
const calcular=document.querySelector('.calcular')
const reseteo=document.querySelector('.reset')

botones.forEach(boton => { boton.addEventListener('click',marcar)})
calcular.addEventListener('click',calcularE)
reseteo.addEventListener('click', reset)

//Funcion para marcar valores
function marcar(boton){
    const aCalcular=boton.target.value;
    marcarElementos(aCalcular)
}

//Generamos la operación a resolver
function marcarElementos(elemento){
    contenido.value+=elemento;
    
}


//Realizamos el cálculo de la expresión guardada anteriormente
function calcularE(){
  
  const resultado=eval(contenido.value);
    contenido.value=resultado;
  console.log(resultado)
 
}

function reset(){
    contenido.value='';
}