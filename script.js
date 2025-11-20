let counterElement = document.getElementById("counterValue");

function onIncrement(){
    let previousCounterValue = counterElement.textContent;
    let updateCounterValue = parseInt(previousCounterValue) + 1;
    counterElement.textContent = updateCounterValue;
    if (updateCounterValue > 0){
        counterElement.style.color="green";
    }
    else if (updateCounterValue < 0) {
        counterElement.style.colr="red";
    }
    else {
        counterElement.style.color="black";
    }
}
function onDecrement(){
    let previousCounterValue = counterElement.textContent;
    let updateCounterValue = parseInt(previousCounterValue) - 1;
    counterElement.textContent = updateCounterValue;
     if (updateCounterValue < 0){
        counterElement.style.color="red";
    }
    else if (updateCounterValue > 0) {
        counterElement.style.colr="green";
    }
    else {
        counterElement.style.color="black";
    }
}
function onReset(){
    let updateCounterValue = 0;
    counterElement.textContent = updateCounterValue;
    counterElement.style.color="black";
}