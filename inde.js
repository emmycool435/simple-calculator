const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");

const formEl = document.getElementById("form");

const inputEl = document.getElementById("input");

const socreEl = document.getElementById("score")

let score = JSON.parse(localStorage.getItem("score"));


if (!score){
    score = 0;
}

socreEl.innerText = `Score: ${score}`;

questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value

    if (userAns === correctAns){
        score += 1;
        updateLocalStorage();
    }else {
        score -= 1;
        updateLocalStorage();
    }
});

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
};


