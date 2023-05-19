'use strict';

let randNum = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click',function(){
    var guessValue = Number(document.querySelector('.guess').value);
    if(!guessValue){
        console.log(`🚫Write a number between 1 and 20!`);
    } else if(guessValue > randNum){
        document.querySelector('.message').textContent = 'Too High!';
        if(score>1){
            score--;
            document.querySelector('.score').textContent = score;}
        else {
            document.querySelector('.message').textContent = '🚫 You Lose!'
            document.querySelector('.score').textContent = 0;
        }
    } else if(guessValue < randNum){
        document.querySelector('.message').textContent = 'Too Low!';
        if(score>1){
            score--;
            document.querySelector('.score').textContent = score;}
        else {
                document.querySelector('.message').textContent = '🚫 You Lose!'
                document.querySelector('.score').textContent = 0;
            }
    } else if(guessValue === randNum){
        document.querySelector('.message').textContent = '🎉You won the Game!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        // In Javascript, you need to apply all of the css props as a string!
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = randNum;
        // 0 is a falsy value, so if applied with a not Operator would make it a true statement!
        if(score>highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
});

document.querySelector('.again').addEventListener('click',function(){
        score = 20;
        randNum = Math.trunc(Math.random()*20)+1;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.score').textContent = '20';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.guess').value = '';
        document.querySelector('.number').style.width = '15rem';
});