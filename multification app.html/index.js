const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math,random()*10);

const questionE1 = document.getElementById(question);

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const secondEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}

scoreEl.innertext = 'score: $(score)';
questionE1.innerText = 'What is ${num1} multiply by ${num2}?';
const correctAns = num1 * num2;
formEl.addEventListener("submit", () =>{
    const userAns = +inputEl.value;
    if (userAns === correctAns){
        score++;
        updatelocalStorage();
    } else{
        updatelocalStorage();
    }
});

function updatelocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}
