class PrintEditionItem{
    constructor(name,releaseDate,pagesCount,state=100,type=null){
        this.name=name;
        this.releaseDate=releaseDate;
        this.pagesCount=pagesCount;
        this.type=type;
        this._state = state;
    }
    fix(){
        if(this.state < 100 || this.state === 0){
            this.state = (this.state * 1.5 > 100) ? 100 : this.state * 1.5;
        }
    }
    set state(val){
        this._state=(val < 0) ? 0 : val;
    }
    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name,releaseDate,pagesCount,state=100,type=null){
        super(name,releaseDate,pagesCount,state,type=null);
        this.type='magazine';
    }
}

class Book extends PrintEditionItem{
    constructor(author,name,releaseDate,pagesCount,state=100,type=null){
        super(name,releaseDate,pagesCount,state,type||'book');
        this.author = author;
    }
}

class NovelBook extends Book{
    constructor(author,name,releaseDate,pagesCount,state=100){
        super(author,name,releaseDate,pagesCount,state,'novel');
    }
}
class FantasticBook extends Book{
    constructor(author,name,releaseDate,pagesCount,state=100){
        super(author,name,releaseDate,pagesCount,state,'fantastic');
    }
}
class DetectiveBook extends Book{
    constructor(author,name,releaseDate,pagesCount,state=100){
        super(author,name,releaseDate,pagesCount,state,'detective');
    }
}

class Library{
    constructor(name,books=[]){
        this.name=name;
        this.books=books;
    }

    addBook(book){
        if(book.state>30){
            this.books.push(book);
        }else{
            console.log('Too bad book');
        }
    }

    findBookBy(type, value){
        let arr = this.books.filter(book => book[type] === value)
        return (arr.length > 0) ? arr[0] : null;
    }

    giveBookByName(name){
        let book = this.findBookBy('name',name);
        if(book === null)
            return null;
        this.books.pop(book);
        return book;
    }
}


/* Задание 3 */
class Student{
    constructor(name, gender, age){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = new Object();
    }

    addMark(mark,subject){
        if(mark >=2 && mark <=5){
            if(!(subject in this.marks)){
                this.marks[subject]=[];
            }
            this.marks[subject].push(mark);
        }
            
    }

    getAverageBySubject(subject){
        if(!(subject in this.marks))
            return 0;
        return this.marks[subject].reduce((avg,mark)=>{
                avg+=mark/this.marks[subject].length;
                return avg;
            },0)
    }

    getAverage(){
        let objectsCount = Object.keys(this.marks).length;
        if(objectsCount===0)
            return 0;
        let sum=0;
        for(let subject in this.marks){
            sum+=this.getAverageBySubject(subject);
        }
        return sum/objectsCount;
    }
}
