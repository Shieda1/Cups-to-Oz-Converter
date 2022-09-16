// https://www.omnicalculator.com/conversion/cups-to-oz

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const ozRadio = document.getElementById('ozRadio');
const cupsRadio = document.getElementById('cupsRadio');

let oz;
let cups = v; 

// labels of the inpust
const variable = document.getElementById('variable');

ozRadio.addEventListener('click', function() {
  variable.textContent = 'Cups';
  cups = v;
  result.textContent = '';
});

cupsRadio.addEventListener('click', function() {
  variable.textContent = 'Oz';
  oz = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(ozRadio.checked)
    result.textContent = `Oz = ${computeoz().toFixed(5)}`;

  else if(cupsRadio.checked)
    result.textContent = `Cups = ${computecups().toFixed(5)}`;
})

// calculation

function computeoz() {
  return Number(cups.value) * 8;
}

function computecups() {
  return Number(oz.value) / 8;
}