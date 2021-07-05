'use strict';

let userName = prompt("what is your name?");
console.log("userName");
alert("welcome " + userName + " in our project");

let favourite = prompt("do I like sport?");
favourite = favourite.toLowerCase();

if (favourite === "yes" || favourite === "y") {
    console.log(favourite + " I like sport because it is very useful and meaningful");
    alert("that is true, I like it");
}
else if (favourite === "no" || favourite === "n") {
    console.log("I like sport because it is very useful and meaningful");
    alert("actually, I like sport because it is very useful and meaningful");
}

let typeOfSport = prompt("do I like football?");
typeOfSport = typeOfSport.toLowerCase();

if (typeOfSport === "yes" || typeOfSport === "y") {
    console.log(typeOfSport + ", I like football, It is the greatest game in the world, keep in mind that The world\'s richest people are soccer players");
    alert("that is true, I like football, It is the greatest game in the world");
}
else if (typeOfSport === "no" || typeOfSport === "n") {
    console.log(", keep in mind that The world\'s richest people are soccer players");
    alert("keep in mind that The world\'s richest people are soccer players");
}


let club = prompt("do I like Real Madrid club ?");
club = club.toLowerCase();

if (club === "yes" || club === "y") {
    console.log(club + ", Real Madrid is the most popular club in the world with 100 million Instagram followers");
    alert("Yes Real Madrid is the most popular club in the world with 100 million Instagram followers");
} else if (club === "no" || club === "n") {
    console.log("actually, Real Madrid is my favourite club");
    alert("actually, Real Madrid is my favourite club");
}

let myCharecture = prompt("do I like developing myself ?");
myCharecture = myCharecture.toLowerCase();

if (myCharecture === "yes" || myCharecture === "y") {
    console.log(myCharecture + ", that explain why I am in this course at this stage of my life");
        alert('That explain why I am in this course at this stage of my life, and I wish success and develop myself more and more');
}
else if (myCharecture === "no" || myCharecture === "n") {
    console.log( "This contradicts with my being here")
    alert('This contradicts with my being here, I am in this course at this stage of my life, and I wish success and develop myself more and more');
}


let mark=prompt("Do I deserve a full mark?");
mark = mark.toLowerCase();

if (mark === "yes" || mark === "y") {
    console.log(mark +", I agree with you and I deserve that");
        alert('I agree with you, I deserve that');
}
        else if (mark === "no" || mark === "n") {
            console.log( "could you reconsidered again,please?")
            alert('could you reconsidered again,please?');
        }