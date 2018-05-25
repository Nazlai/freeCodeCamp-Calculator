const screen = document.getElementById("screen");
const show = document.getElementById("show");

screen.textContent = 0;
show.textContent = 0;

function displayZero(e){
    // Sets screen display to button value if screen is currently zero
    if (screen.textContent === "0"){
        screen.textContent = e;
    } else {
    screen.textContent += e;
    }
};

function numbers(e){
    // Screen displays decimal numbers
    // Button press displays corresponding number to screen
    if (show.textContent.endsWith(".")){
        show.textContent += e;
    } else {
        show.textContent = e;
    }
};

function operator(e){
    // Lets screen display decimal numbers
    // Operators do not show on screen
    if (show.textContent.endsWith(".")){
        show.textContent += e;
    }
};

function press(e){
    // For number click events
    displayZero(e);
    numbers(e);
};



function pressOp(e){
    // For operator click events
    displayZero(e);
    operator(e);
};

// Adds click event for every button that is a number
let btn = document.querySelectorAll(".btn");
let arr = [];
for (let i = 0; i < btn.length; i++){
     arr.push(btn[i].textContent);
}
for (let i = 0; i < arr.length; i++){
    btn[i].addEventListener("click", function(e){
        press(arr[i]);
    })
}

let times = document.getElementById("times");
times.addEventListener("click", function(){
    // Prevents consecutive multiple signs
    if (!screen.textContent.endsWith("*")){
        pressOp("*");
    }
});

let add = document.getElementById("add");
add.addEventListener("click", function(){
    // Prevents consecutive addition signs
    if (!screen.textContent.endsWith("+")){
        pressOp("+");
    }
});

let minus = document.getElementById("minus");
minus.addEventListener("click", function(){
    // Prevents consecutive subtraction signs
    if (!screen.textContent.endsWith("-")){
        pressOp("-");
    }
});

let divide = document.getElementById("divide");
divide.addEventListener("click", function(){
    // Prevents consecutive division signs
    if (!screen.textContent.endsWith("/")){
        pressOp("/");
    }
});


let point = document.getElementById("point");
point.addEventListener("click", function(){
    function press(e){      
        // Decimal point shows on both screens
        screen.textContent += e;
        show.textContent += e;
    }
    // Prevents consecutive decimal point 
    if (!screen.textContent.endsWith(".")){
        press(".");
    }
    
});

// Button on press removes last character on screen
// If all characters are removed, sets screen value to zero
let cut = document.getElementById("cut");
cut.addEventListener("click", function(e){
    let screenString = screen.textContent;
    screen.textContent = screenString.substring(0, screenString.length - 1);
    if(screen.textContent === ""){
    screen.textContent = 0;
    show.textContent = 0;
    }
});

// Button press calculates string value
let equal = document.getElementById("equal");
equal.addEventListener("click", function(){
    let result = eval(screen.textContent);
    screen.textContent = result;
    show.textContent = result;
});

// Clears screen and sets screen value to zero
let clear = document.getElementById("clear");
clear.addEventListener("click", function(){
    screen.textContent = 0;
    show.textContent = 0;
});

