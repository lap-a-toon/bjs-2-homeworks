"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b,2) - 4*a*c;
  if(d<0){
    // дискриминант < 0, корней нет
  }else if(d===0){
    // дискриминант = 0, корень один
    arr.push(-b/(2*a));
  }else{
    // дискриминант > 0, два корня
    arr.push((-b + Math.sqrt(d) )/(2*a));
    arr.push((-b - Math.sqrt(d) )/(2*a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let creditBody = amount - contribution;
  let percentKoefficient = percent/(100*12);
  let payment = creditBody * (percentKoefficient + (percentKoefficient / (Math.pow(1 + percentKoefficient, countMonths) - 1)))
  let paymentToShow = Number((payment*countMonths).toFixed(2));
  return paymentToShow;
}