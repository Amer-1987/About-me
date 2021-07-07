'use strict';
let score = 0;
let userName = prompt("what is your name?");
console.log("userName");
alert("welcome " + userName + " in our project");


let favourite = prompt("do I like sport?");
favourite = favourite.toLowerCase();

function question1() {

    if (favourite === "yes" || favourite === "y") {
        console.log(favourite + " I like sport because it is very useful and meaningful");
        alert("that is true, I like it");
        score++;
    }
    else if (favourite === "no" || favourite === "n") {
        console.log("I like sport because it is very useful and meaningful");
        alert("actually, I like sport because it is very useful and meaningful");
    }

}
question1();


let typeOfSport = prompt("do I like football?");
typeOfSport = typeOfSport.toLowerCase();

function question2() {
    if (typeOfSport === "yes" || typeOfSport === "y") {
        console.log(typeOfSport + ", I like football, It is the greatest game in the world, keep in mind that The world\'s richest people are soccer players");
        alert("that is true, I like football, It is the greatest game in the world");
        score++;

    }
    else if (typeOfSport === "no" || typeOfSport === "n") {
        console.log(", keep in mind that The world\'s richest people are soccer players");
        alert("wrong answer, keep in mind that The world\'s richest people are soccer players");
    }
}
question2();


let club = prompt("do I like Real Madrid club ?");
club = club.toLowerCase();

function question3() {
    if (club === "yes" || club === "y") {
        console.log(club + ", Real Madrid is the most popular club in the world with 100 million Instagram followers");
        alert("Yes Real Madrid is the most popular club in the world with 100 million Instagram followers");
        score++;

    } else if (club === "no" || club === "n") {
        console.log("actually, Real Madrid is my favourite club");
        alert("wrong answer, actually, Real Madrid is my favourite club");
    }
}
question3();


let myCharecture = prompt("do I like developing myself ?");
myCharecture = myCharecture.toLowerCase();

function question4() {

    if (myCharecture === "yes" || myCharecture === "y") {
        console.log(myCharecture + ", that explain why I am in this course at this stage of my life");
        alert('right answer, That explain why I am in this course at this stage of my life, and I wish success and develop myself more and more');
        score++;

    }
    else if (myCharecture === "no" || myCharecture === "n") {
        console.log("wrong answer, This contradicts with my being here")
        alert('wrong answer, This contradicts with my being here, I am in this course at this stage of my life, and I wish success and develop myself more and more');
    }
}
question4();



let mark = prompt("Do I deserve a full mark?");
mark = mark.toLowerCase();

function question5() {

    if (mark === "yes" || mark === "y") {
        console.log(mark + ", I agree with you and I deserve that");
        alert('right answer, I agree with you, I deserve that');
        score++;

    }
    else if (mark === "no" || mark === "n") {
        console.log("wrong answer, could you reconsidered again,please.");
        alert('wrong answer,could you reconsidered again,please?');
    }
}
question5();


let myNo = 6;
let i;
let Guess;

function question6() {

for (i = 0; i < 4; i++) {

    Guess = prompt("guess a number between 1 to 12, you have 4 attempts");


    if (Guess < myNo) {
        console.log("Your guess is " + Guess + ", You are too low, try again");
        alert("You are too low , try again");


    } else if (Guess > myNo) {
        console.log("Your guess is " + Guess + ", You are too high, try again");
        alert("You are too high , try again");
    }

    else {
        alert('correct guess, that is great');
        console.log("Your guess is " + Guess + ", correct, that is great");
        score++;

        break;
    }


    if (i === 3) {
        console.log('Unfortunately, you have exceeded the number of times allowed, the true number is 6 ');
        alert('Unfortunately, you have exceeded the number of times allowed, the true number is 6 ');
    }
}

}
 question6();


 function question7() {
let Movies = ['vikings', 'blacklist', 'spartacus', 'mentalist', 'prison break', 'breaking bad'];
console.log(Movies.length);

let favMovies = ("");

for (let i = 0; i < 6; i++) {
    favMovies = prompt('Guess one of my favourite movies?');

    for (let j = 0; j < Movies.length; j++) {
        console.log('second loop', j);

        if (Movies[j] === favMovies) {
            console.log(Movies[j]);
            alert("correct");
            score++;
            i = 10;
        }
    }
    if (i === 5) {
        alert("sorry no more tries")
    } else if (i < 6) {
        alert("wrong answer")
    }

}
}
question7();

console.log("your score is "+score);
alert("My favourite Movies are vikings , blacklist, spartacus, mentalist, prison break and breaking bad");
alert(`thank you ${userName},your score is ${score}/7`);