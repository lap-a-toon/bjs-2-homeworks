function getArrayParams(...arr) {
  let min = Infinity,
      max = -Infinity,
      sum = 0;
  for(let el of arr){
    if(el>max)
      max = el;
    if(el<min)
      min = el;
    sum += el;
  }
  let avg = Number((sum / arguments.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  return arr.length>0 ? arr.reduce((sum, el) => sum += el, 0) : 0;
}

function differenceMaxMinWorker(...arr) {
  return arr.length>0 ? Math.max.apply(null,arr) - Math.min.apply(null,arr) : 0;
}

function differenceEvenOddWorker(...arr) {
  if(arr.length===0)
    return 0;
  let sumEvenElement = 0,
      sumOddElement = 0;
  for(let el of arr){
    if(el % 2 === 0){
      sumEvenElement += el;
    }else{
      sumOddElement += el;
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if(arr.length===0)
    return 0;
  let sumEvenElement = 0,
      countEvenElement = 0;
  for(let el of arr){
    if(el % 2 === 0){
      sumEvenElement += el;
      countEvenElement++;
    }
  }
  return sumEvenElement/countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for(let arr of arrOfArr){
    let subResult = func(...arr);
    if(subResult > maxWorkerResult)
      maxWorkerResult = subResult;
  }
  return maxWorkerResult;
}
