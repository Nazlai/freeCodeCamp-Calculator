const show = document.getElementById("show");
const calculate = document.getElementById("screen");
const btn = document.querySelectorAll(".btn");

show.textContent = 0;
calculate.textContent = 0;

for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function(){
        const number = btn[i].textContent;
        const displayNumber = show.textContent;
        const calculateNumber = calculate.textContent;
        
        // Replace zero or operator with numbers if screen currently is showing an operator or zero
        if (
            show.textContent === "+" ||
            show.textContent === "-" ||
            show.textContent === "*" ||
            show.textContent === "/"
    ){
            show.textContent = number;
            calculate.textContent = calculateNumber + number;
        } else if(
            show.textContent === "0" &&
            calculate.textContent === "0"
        ){
            show.textContent = number;
            calculate.textContent = number;
        } else {
            show.textContent = displayNumber + number;
            calculate.textContent = calculateNumber + number;
        }

        if (show.textContent.endsWith(".")){
            show.textContent = displayNumber + number;
            calculate.textContent = calculateNumber + number;
        }
    })
}

let decimal = document.getElementById("point");
point.addEventListener("click", function(){
  if (!calculate.textContent.endsWith(".")){
    show.textContent += ".";
    calculate.textContent += ".";
  }
})

let operator = document.querySelectorAll(".operator");
for (let i = 0; i < operator.length; i++){
    operator[i].addEventListener("click", function(){
        let selectedOperator = operator[i].textContent;
        if (!show.textContent.endsWith(selectedOperator) && 
            !calculate.textContent.endsWith(selectedOperator)){
        show.textContent = selectedOperator;
        calculate.textContent += selectedOperator;
        }
    })
}

let clear = document.getElementById("clear");
clear.addEventListener("click", function(){
    show.textContent = "0";
    calculate.textContent = "0";
})

let cut = document.getElementById("cut");
cut.addEventListener("click", function(){
    let calculateString = calculate.textContent;
    calculate.textContent = calculateString.substring(0, calculateString.length - 1);
    if (calculate.textContent === ""){
        show.textContent = 0;
        calculate.textContent = 0;
    }
})

let equal = document.getElementById("equal");
equal.addEventListener("click", function(){
    let result = eval(calculate.textContent);
    show.textContent = result;
    calculate.textContent = result;
})