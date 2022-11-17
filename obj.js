// Creating object with string literal
// var student={
//     name:"Chris",
//     age:21,
//     studies:"Computer Science"
// };
// document.getElementById("demo").innerHTML=student.name + " of age " + student.age + " studies "+ student.studies;
// Creating object with new keyword
// var student= new Object();
// student.name="Rahim";
// student.age= 45;
// student.studies="CSE";
// console.log(student);

// Creating object with constructor function
// var rahim={
//     fullName:"Sumon",
//     age:40,
//     job:"Teacher",
//     welcomeMsg:function(){
//         alert("Welcome to MCPSC");
//     }


// }


// Generally we can't access the values of an object with normal for loop because in object the items have 
// no index number but there is a special type of loop for---in we can acess the values.
// for(elements in rahim){
//     console.log(elements);
// } 
// out put    fullName, age,job,welcomeMsg


// Array inside object
// var objArr={
//     car:["Toyota","Harrier","Odi","Mazda","Mercedeze "],
//     name:["Rahim","Karim","Naim","Tito"],
//     age:[10,20,30,40,50]
// }
// I want the car name Mazda (value acess)
// console.log(objArr.car[3]);
// console.log(objArr['car'][2]);
// Property acess
// for (elements in objArr){
//     console.log(elements);
// };
// out put car name age


// Object inside Array
// var arrObj=[
//     "sumon",
//     {
//         name:"Shakhawat",
//         age:40,
//         job:"Teacher"
//     },
//     "Bangladesh"
// ]
// let items=arrObj[1]["age"];
// console.log(items);
// for(let x=0; x<arrObj.length;x++){
//     let item=arrObj[x];
//     console.log(item);
// }
// output sumon, array,Bangladesh
// const elemObj=[
//     {
//         menuName:"Home",
//         link:"Google.com"

//     },
//     {
//         menuName:"Contact",
//         link:"Github.com"

//     },
//     {
//         menuName:"Services",
//         link:"Facebook.com"

//     },
//     {
//         menuName:"Blog",
//         link:"Twiter.com"

//     },
//     {
//         menuName:"Features",
//         link:"Udemy.com"

//     }
// ]
// for(let x=0; x<elemObj.length;x++){
//     let menuItems = elemObj[x].menuName;
//      console.log(menuItems);
//      let linkItems=elemObj[x]["link"]; 
//      console.log(linkItems);

// }


// Object creation with constructure function
// function stud(name, age, studies){

//     this.name = name;

//     this.age = age;

//     this.studies = studies;

// }

// var student = stud("Chris", 21, "Computer Science");

// document.getElementById("demo").innerHTML = student.name + " of the age " + student.age + " studies " + student.studies;

// const a=6;
// const b=3;
// console.log(a  &   b);




// *************Bitwise operators********************
console.log((7).toString(2));
// out put 111

// console.log((5).toString(2));
// console.log((-5).toString(2));
// console.log((-3).toString(2));

// console.log(a+b);
// Bitwise & (and) operator
console.log(5&3)
// 5 = 0101 || 0011-----> 0001 output 1
console.log(4&5)
// 4= 0100 || 5= 0101 -----> 0100  output 4

// Bitwise | (oR) or operator
console.log(4|5)
// 4= 0100 || 5= 0101 -----> 0101  output 5
console.log(6|7)
// 6= 110  || 7= 111 -------> 111  output 7
console.log(6^7)
// 6= 110  || 7= 111 -------> 001  output 1
console.log(~7)
// 8
// ****************Bitwise Operator End******************************

// #########################################################################################

// Constructor function Start*****************************
// constructor function's name is start with capital letter
// But the Math function with capital M is an in built function
// of js but not a constructor function.
// Uses: When we want to create hundreds of objcet with same property
// and methods then we use a template function which is known as
// constructor function.
// The purpose of a constructor is to create a new object and set values for any existing object properties.
// When the this keyword is used in a constructor, it refers to the newly created object
function Person(first,last,age){
    this.firstName= first;
    this.lastName=last;
    this.age=age;
    this.fullame=function(){
        return this.firstName + "   "+ this.lastName
    }
}
// now the above function can be considered as a proforma of structure
// or template of creating new oersons or objects.

// *** When a constructor gets invoked in JavaScript, the following sequence of operations take place:
// 1.A new empty object gets created.
// 2.The this keyword begins to refer to the new object and it becomes the current instance object.
// 3.The new object is then returned as the return value of the constructor.******
const sumon= new Person('Shakhawat', 'Hossain', 44);
const reazul = new Person('Reaxul','Islam',34);
const ziaul = new Person('Ziaul','Islam',35);
console.log(sumon);
console.log(sumon.fullame());
console.log(sumon.age);
console.log(sumon.lastName);
// Adding new property to your newly created object not with the
// constructor's template
sumon.job="Teacher";
console.log(sumon);
// Properties and methods can be added to a constructor using a prototype
Person.country='Bangladesh';
console.log(ziaul);


// ***************Constructor function Ends*************************













