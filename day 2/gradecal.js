function studentGrade(score)
{
 //let a=score.studentgrade();
switch(true) //to check condition use 'true' , to just print the passed parameter give the parameter switch(score)
{
case(score>90 && score<=100):
return "grade A:"+score;
break;
case(score>75 && score<=90):
return "grade B:"+score;
break;
case(score>50 && score<=75):
return "grade C:"+score;
break;
default:
    return "provide a valid score:"+score;
    break;
}
}
console.log(studentGrade(90));
console.log(studentGrade(85));
console.log(studentGrade(74));
console.log(studentGrade(45));
console.log(studentGrade(95));
console.log(studentGrade(26));