function parseCount(numStr){
    if(isNaN(numStr)){
        throw new Error("Невалидное значение");
    }else{
        return Number.parseFloat(numStr);
    }
}
function validateCount(toParse){
    try{
        return parseCount(toParse)
    }catch(e){
        return e;
    }
}


class Triangle{
    constructor(a,b,c){
        if(a+b<c || a+c<b || b+c<a){
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    get perimeter(){
        return this.a + this.b + this.c;
    }
    get area(){
        let p = .5*(this.perimeter); // полупериметр
        return Number(Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c)).toFixed(3));
    }
}

class TriangleWrong{
    get perimeter(){
        return "Ошибка! Треугольник не существует";
    }
    get area(){
        return "Ошибка! Треугольник не существует";
    }
}

function getTriangle(a,b,c){
    try{
        return new Triangle(a,b,c)
    }catch{
        return new TriangleWrong(a,b,c)
    }
}
