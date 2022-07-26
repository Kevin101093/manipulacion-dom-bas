const input1 = document.querySelector('#calculo1');
const form = document.querySelector('#form');
const input2 = document.querySelector('#calculo2');
const btn  = document.querySelector('#btnCalcular');
let pResult = document.querySelector('#result');


form.addEventListener('submit', btnOnClick);

function btnOnClick(event)
{
    event.preventDefault();
    let sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado es: " + sumaInputs;
    return pResult;
}