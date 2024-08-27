
let action = '+'
const  resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiBtn = document.getElementById('multi')
const divisBtn = document.getElementById('divis')



// console.log(resultElement.textContent)
// resultElement.textContent = 42


plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}
multiBtn.onclick = function () {
    action = '*'
}
divisBtn.onclick = function () {
    action = '/'
}


function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'lime'
    } 
    resultElement.textContent = result
}

function computeNumbersWithAction(_inp1, _inp2, actionSymbol) {
    const num1 = Number(_inp1.value)
    const num2 = Number(_inp2.value)
    if (actionSymbol == '+') {
        return num1 + num2
    }

    if (actionSymbol == '-') {
        return num1 - num2
    }

    if (actionSymbol == '*') {
        return num1 * num2
    }

    if (actionSymbol == '/') {
        return num1 / num2
    }
}

submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)

    // if (action == '+') {
    //     const sum = Number(input1.value) + Number(input2.value)
    //     printResult (sum)
    // } else if (action == '-') {
    //     const sum = Number(input1.value) - Number(input2.value)
    //     printResult (sum)
}
