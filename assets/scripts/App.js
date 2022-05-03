const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput(){
    return userInput.value;
}

function createAndWriteLog(operator, resultBeforeCalc, calcNumber){
    const description = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, description);
}

function writeToLog(
    operationIdentifier, 
    previousResult,
    operationNumber, 
    newResult){
        const logEntry = {
            operation: operationIdentifier, 
            previousResult: previousResult,
            operand: operationNumber,
            result: newResult
        };
        logEntries.push(logEntry);
        console.log(logEntries[0]);
}

function calculateResult(calculationType){
    if(
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'DIVIDE' &&
        calculationType !== 'MULTIPLY' ||
        !enteredNumber
    ){
        return;
    }

    // if(
    //     calculationType !== 'ADD' ||
    //     calculationType !== 'SUBTRACT' ||
    //     calculationType !== 'DIVIDE' ||
    //     calculationType !== 'MULTIPLY'
    // ){
    //     return;
    // }

    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    if (calculationType === 'ADD'){
    currentResult += enteredNumber ;
    mathOperator = '+';
    }
    else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber ;
    mathOperator = '-';
    }
    else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber ;
    mathOperator = '*';
    }
    else if (calculateResult === 'DIVIDE'){
    currentResult /= enteredNumber ;
    mathOperator = '/';
    }
    createAndWriteLog(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}
function add() {
    calculateResult('ADD');
}

function subtract(){
    calculateResult('SUBTRACT');
}

function multiply(){
    calculateResult('MULTIPLY');
}

function divide(){
    calculateResult('MULTIPLY');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
