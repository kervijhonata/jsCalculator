const entrada = document.querySelector(".display");
const buttons = document.querySelectorAll('.buttons button');
var resultados = [];

function calculate(){
  resultados.push(eval(entrada.value))
  // entrada.value = eval(entrada.value);
  entrada.value = resultados[resultados.length-1]
  console.log(resultados)
}

var i = 1;

function lastResult(){
  if(resultados.length == 0){

  }else{
    entrada.value = resultados[resultados.length-i];
    console.log(resultados[resultados.length-i]);
    if(i < resultados.length ){
      return i = i+1;
    }else{
      return i = 1;
    }
  }
}

buttons.forEach(function(button){
    button.addEventListener("click", function(){
        switch(button.innerHTML){
        default:
          entrada.value += this.innerHTML;
          break;
        case "=":
          entrada.value !== "" ? calculate() : entrada.value = "ERR";
          break;
        case "CE":
          entrada.value = "";
          return i = 1;
          break;
        case "C":
          entrada.value = entrada.value.slice(0, -1)
          break;
            
        //   case "←": case "&#x2190;":
        case "🢨": case "&#129192;":
            lastResult();
            break;
        }
    });
});