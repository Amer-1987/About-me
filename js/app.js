'use strict';
let score=0;
let userName = prompt("what is your name?");
console.log("userName");
alert("welcome " + userName + " in our project");

let favourite = prompt("do I like sport?");
favourite = favourite.toLowerCase();

if (favourite === "yes" || favourite === "y") {
    console.log(favourite + " I like sport because it is very useful and meaningful");
    alert("that is true, I like it");
    score++;
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
    score++;

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
    score++;

} else if (club === "no" || club === "n") {
    console.log("actually, Real Madrid is my favourite club");
    alert("actually, Real Madrid is my favourite club");
}

let myCharecture = prompt("do I like developing myself ?");
myCharecture = myCharecture.toLowerCase();

if (myCharecture === "yes" || myCharecture === "y") {
    console.log(myCharecture + ", that explain why I am in this course at this stage of my life");
    alert('That explain why I am in this course at this stage of my life, and I wish success and develop myself more and more');
    score++;

}
else if (myCharecture === "no" || myCharecture === "n") {
    console.log("This contradicts with my being here")
    alert('This contradicts with my being here, I am in this course at this stage of my life, and I wish success and develop myself more and more');
}


let mark = prompt("Do I deserve a full mark?");
mark = mark.toLowerCase();

if (mark === "yes" || mark === "y") {
    console.log(mark + ", I agree with you and I deserve that");
    alert('I agree with you, I deserve that');
    score++;

}
else if (mark === "no" || mark === "n") {
    console.log("could you reconsidered again,please?");
    alert('could you reconsidered again,please?');
}


let myNo = 6;
let i;
let Guess;
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

}

if (Guess < myNo || Guess > myNo) {
    console.log('Unfortunately, you have exceeded the number of times allowed, the true number is 6 ');
    alert('Unfortunately, you have exceeded the number of times allowed, the true number is 6 ');
}


let Movies = ['vikings', 'blacklist', 'spartacus', 'mentalist', 'prison break', 'breaking bad'];
console.log(Movies.length);


let favMovies;

for (let i = 0; i < 6; i++) {
    favMovies = prompt('what are my favourite movies?');

    for (let j = 0; j < 6; j++) {
        console.log('second loop', j);

        if (favMovies === Movies[j]) {
            console.log(Movies[j]);
            alert("correct");
            score++;

            //break;
            i = 10;
        }
        // else {
        //     alert("wrong");
        //     favMovies = prompt('what are my favourite movies?');
        // }
    }

     if (i===5){
         alert("sorry no more tries")
     }  else if (i<6){
         alert("wrong answer")
     }

}
alert("My favourite Movies are vikings , blacklist, spartacus, mentalist, prison break and breaking bad");
alert(`thank you ${userName},your score is ${score}/7`);