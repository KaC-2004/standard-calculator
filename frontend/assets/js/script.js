let infixExpression="";

const displayScreen = document.getElementById("display-screen")
function displayExpression(){
    displayScreen.value = infixExpression;
}

const clearBtn = document.getElementById("child-clear-all")
clearBtn.addEventListener("click", function(){
    infixExpression="";
    displayExpression();
});

const delBtn = document.getElementById("op-del")
delBtn.addEventListener("click", function(){
    infixExpression = infixExpression.slice(0, -1)  ;
    displayExpression(); 
});

//Defining the operands
const num1 = document.getElementById("num-1")
num1.addEventListener("click", function(){
    infixExpression = infixExpression.concat("1");
    displayExpression();
});

const num2 = document.getElementById("num-2")
num2.addEventListener("click", function(){
    infixExpression = infixExpression.concat("2");
    displayExpression();
});

const num3 = document.getElementById("num-3")
num3.addEventListener("click", function(){
    infixExpression = infixExpression.concat("3");
    displayExpression();
});

const num4 = document.getElementById("num-4")
num4.addEventListener("click", function(){
    infixExpression = infixExpression.concat("4");
    displayExpression();
});

const num5 = document.getElementById("num-5")
num5.addEventListener("click", function(){
    infixExpression = infixExpression.concat("5");
    displayExpression();
});

const num6 = document.getElementById("num-6")
num6.addEventListener("click", function(){
    infixExpression = infixExpression.concat("6");
    displayExpression();
});

const num7 = document.getElementById("num-7")
num7.addEventListener("click", function(){
    infixExpression = infixExpression.concat("7");
    displayExpression();
});

const num8 = document.getElementById("num-8")
num8.addEventListener("click", function(){
    infixExpression = infixExpression.concat("8");
    displayExpression();
});

const num9 = document.getElementById("num-9")
num9.addEventListener("click", function(){
    infixExpression = infixExpression.concat("9");
    displayExpression();
});

const num0 = document.getElementById("num-0")
num0.addEventListener("click", function(){
    infixExpression = infixExpression.concat("0");
    displayExpression();
});

//Defining operators
const division = document.getElementById("op-divide")
division.addEventListener("click", function(){
    infixExpression = infixExpression.concat("/");
    displayExpression();
});

const multiply = document.getElementById("op-mul")
multiply.addEventListener("click", function(){
    infixExpression = infixExpression.concat("*");
    displayExpression();
});

const subtraction = document.getElementById("op-sub")
subtraction.addEventListener("click", function(){
    infixExpression = infixExpression.concat("-");
    displayExpression();
});

const add = document.getElementById("item-addition")
add.addEventListener("click", function(){
    infixExpression = infixExpression.concat("+");
    displayExpression();
});

const radix = document.getElementById("op-dot")
radix.addEventListener("click", function(){
    infixExpression = infixExpression.concat(".");
    displayExpression();
});

const result = document.getElementById("item-equals")
result.addEventListener("click", function(){
    evaluateExpression();
    displayExpression();
});

//evaluateExpression() part
function evaluateExpression(){
    
}