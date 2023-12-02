function Student(name, gender, age) {
  this.name=name;
  this.gender=gender;
  this.age=age;
  this.marks=[];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject=subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks){
    this.marks = [...this.marks, ...marks];
  }
}

Student.prototype.getAverage = function () {
//   console.log(this.marks);
  let avg = 0;
  if(this.marks && this.marks.length > 0){
    avg = this.marks.reduce((sum,mark,i,marks)=>{
        sum += mark;
        // console.log(mark,sum,sum / marks.length);
        if(i === marks.length - 1){
            return sum / marks.length;
        }
        return sum;
    },0)
  }else{
    avg = 0;
  }
  return avg;
}

Student.prototype.exclude = function (reason) {
  if(this.subject) delete this.subject;
  if(this.marks) delete this.marks;
  this.excluded = reason;
}

