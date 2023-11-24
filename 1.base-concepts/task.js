"use strict"
function solveEquation(a, b, c) {
  const arr = [];
  const d = Math.pow(b,2) - 4*a*c;
  if(d>0){
    // дискриминант > 0, два корня
    arr.push((-b + Math.sqrt(d) )/(2*a));
    arr.push((-b - Math.sqrt(d) )/(2*a));
  }else if(d===0){
    // дискриминант = 0, корень один
    arr.push(-b/(2*a));
  } // дискриминант < 0, корней нет
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const creditBody = amount - contribution,
        percentKoefficient = percent/(100*12),
        payment = creditBody * (percentKoefficient + (percentKoefficient / (Math.pow(1 + percentKoefficient, countMonths) - 1))),
        paymentToShow = Number((payment*countMonths).toFixed(2));
  return paymentToShow;
}