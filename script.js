const calcInput = document.querySelector('#calc-input')
const calcInput2 = document.querySelector('#calc-input-2')
calcInput.value = '0'

const perCent = document.querySelector('.per-cent')
const delCe = document.querySelector('.del-last-res')
const delC = document.querySelector('.del-all')
const delLastNo = document.querySelector('.del-last-no')
const fraction = document.querySelector('.fraction')
const squared = document.querySelector('.squared')
const squaredRoot = document.querySelector('.squared-root')
const dividedBy = document.querySelector('.divided')

const zero = document.querySelector('.zero')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')

const point = document.querySelector('.point')
const plusMinus = document.querySelector('.plus-minus')

const addition = document.querySelector('.add')
const subtraction = document.querySelector('.subst')
const multiply = document.querySelector('.multiply')
const equal = document.querySelector('.equal')


let calcInputVar = ''
let calcInputVar2 = calcInputVar
let noVal = '';
let opCount = 0;
let predefVal = false

calcInput.addEventListener('change', () => {
    calcInputVar = calcInput.value
})

zero.addEventListener('click', () => {
    if (calcInput.value === '0') {
        return       
    } else {
        calcInputVar = calcInputVar + '0'
        calcInput.value = calcInputVar
    }
})

one.addEventListener('click', () => {
    noVal = '1'
    showNo(noVal)   
})

two.addEventListener('click', () => {
    noVal = '2'
    showNo(noVal)
})

three.addEventListener('click', () => {
    noVal = '3'
    showNo(noVal)
})

four.addEventListener('click', () => {
    noVal = '4'
    showNo(noVal)
})

five.addEventListener('click', () => {
    noVal = '5'
    showNo(noVal)
})

six.addEventListener('click', () => {
    noVal = '6'
    showNo(noVal)
})

seven.addEventListener('click', () => {
    noVal = '7'
    showNo(noVal)
})

eight.addEventListener('click', () => {
    noVal = '8'
    showNo(noVal)
})

nine.addEventListener('click', () => {
    noVal = '9'
    showNo(noVal)
})

point.addEventListener('click', () => {
    noVal = '.'
    showNoPoint(noVal)
})

plusMinus.addEventListener('click', () => {
    // showNoPoint(noVal)
    // if (!calcInputVar.includes('-')) {
    //     noVal = '-';
    // } else {
    //     noVal = ''; 
    // }  
    posNeg()
})

let operator = ''
let operator2 = ''

addition.addEventListener('click', () => {
    opCountValidation()
    operator = '+'
    operationMulti(operator2)
    operation(operator)
    correctResult()
})

subtraction.addEventListener('click', () => {
    opCountValidation()
    operator = '-'
    operationMulti(operator2)
    operation(operator)
    correctResult()
})

multiply.addEventListener('click', () => {
    opCountValidation()
    operator = '*'
    operationMulti(operator2)
    operation(operator)
    correctResult()
})

dividedBy.addEventListener('click', () => {
    opCountValidation()
    operator = '/'
    operationMulti(operator2)
    operation(operator)
    correctResult()
})

fraction.addEventListener('click', () => {
    opCountValidation()
    opCount++
    operator2 = operator ? operator : '/'
    operator = '/'
    calcInputVar2 = 1
    predefVal = true
    operationMulti(operator2)
    operation(operator)
    correctResult()
})

squared.addEventListener('click', () => {
    opCountValidation()
    opCount++
    operator2 = operator ? operator : '*'
    operator = '*'
    calcInputVar2 = calcInput.value
    predefVal = true
    operationMulti(operator2)
    operation(operator)
    correctResult()
})

squaredRoot.addEventListener('click', () => {
    opCountValidation()
    opCount++
    operator2 = operator ? operator : 'sqrt'
    operator = 'sqrt'
    // calcInputVar2 = calcInputVar
    calcInputVar = calcInput.value
    predefVal = true
    operationMulti(operator2)
    operation(operator)
    correctResult()
})

let result = undefined;
let eqCount = 0
let resultDoubleEq = undefined
let calcInputVarDoubleEq = undefined
let operatorEq = ''

equal.addEventListener('click', () => {
    eqCount++   
    // console.log(calcInputVar2, '2 calcInputVars at eq', calcInputVar)
    if(calcInputVar2 === '') {
        return calcInputVar ? calcInput.value = calcInputVar : calcInput.value = 0
    }

    correctResult()
    if(eqCount === 1) {
        //!!!! All operations part !!!!
        if (calcInputVar) {
            if (calcInputVar) {
                result = resolveOp(operator, calcInputVar2, calcInputVar)
            } else {
                result = resolveOp(operator, calcInputVar, calcInputVar)
            }
            displayInp2(calcInputVar2, operator, calcInputVar, '=')
            calcInputVarDoubleEq = calcInputVar
        } else {
            result = resolveOp(operator, calcInputVar2, calcInputVar2)
            displayInp2(calcInputVar2, operator, calcInputVar2, '=')
            calcInputVarDoubleEq = calcInputVar2
        }
        opCount = 0;
        resultDoubleEq = result
        operatorEq = operator
        calcInputVar = ''
        operator = ''
        operator2 = ''

    } else if (eqCount > 1) {
        displayInp2(result, operatorEq, calcInputVarDoubleEq, '=')
        result = resolveOp(operatorEq, resultDoubleEq, calcInputVarDoubleEq)
        resultDoubleEq = result
        // console.log('eqOp', result, 'no', parseFloat(calcInputVarDoubleEq))
    } 
    correctResult()
    calcInput.value = result      
})

delC.addEventListener('click', () => { 
    calcInputVar = ''
    calcInputVar2 = ''
    calcInput.value = '0'
    calcInput2.value = ''
    operator = ''
    operator2 = ''
    result = ''
    opCount = 0
    correctResult()
})

delCe.addEventListener('click', () => {  
    calcInputVar = ''
    calcInput.value = '0'
    correctResult()
})

delLastNo.addEventListener('click', () => {  
    calcInputVar = calcInputVar.substring(0, calcInputVar.length - 1)
    if (calcInputVar) {
        calcInput.value = calcInputVar
    } else {
        calcInput.value = '0' 
    }
    correctResult()
})


function showNo(noVal) {
    if (calcInputVar === '0') {
        calcInputVar = noVal;
    } else {
        calcInputVar = calcInputVar + noVal
    }
    correctResult()
    calcInput.value = calcInputVar   
}

function showNoPoint(point) {
    if (calcInput.value.includes('.')) {
        return
    } else 

    if (calcInput.value == result && result.toString().includes('.') === false) {
        calcInputVar = result + point
    } else if (calcInput.value == result && result.toString().includes('.')) {
        return
    } else  {
        calcInputVar = calcInput.value + point
    }
    
    calcInput.value = calcInputVar
}

function posNeg() {
    if (calcInput.value === '0') {
        return
    }
    if (calcInputVar.includes('-')) {
        calcInputVar = calcInput.value.replace('-', '')       
    } else {
        calcInputVar = '-' + calcInput.value
    }
    calcInput.value = calcInputVar
}


function operation() {  
    resultDoubleEq = undefined
    calcInputVarDoubleEq = undefined
    eqCount = 0
    if (calcInputVar === 'Cannot divide by zero') {
        return
    } else {
        if ( opCount === 1 && predefVal === false) {
            calcInputVar2 = parseFloat(calcInput.value)
            displayInp2(calcInputVar2, operator, "", "")
        } else if (opCount > 1 && predefVal === false) {
            displayInp2(calcInputVar2, operator, "", "")
        }       

        calcInputVar = ''
        result = ''
        
        if(opCount > 1) {
            calcInput.value = calcInputVar2
        }
        if (predefVal) {
            predefVal = false
            opCount--
        }
        // console.log('opc', opCount, operator, 'predef', predefVal)
    }       
}

function operationMulti(op2) {
    // console.log('preOpMulti', calcInputVar, 'var2', calcInputVar2, 'res', result, 'opcount', opCount)
    if(calcInputVar === '' && result === '') {
        opCount--
        return
    } else {
        if (predefVal) {
            displayInp2(calcInputVar2, operator, calcInputVar, "")
        }
        calcInputVar2 = resolveOp(op2, calcInputVar2, calcInputVar)
    } 
    correctResult(calcInputVar)
    // console.log('opMulti', calcInputVar, 'two', calcInputVar2, 'three', opCount)
}

function opCountValidation() {
    opCount++
    if (opCount > 1) {
        operator2 = operator
    }
}

function correctResult() {
    if (calcInput.value.length > 11) {
        document.querySelector('#calc-input').style.fontSize = '30px'
    } else {
        document.querySelector('#calc-input').style.fontSize = '38px'
    }
    
    if (result === Infinity) {
        result = 'Cannot divide by zero'
    }

    if (result !== undefined && result.toString().length > 11) {
        document.querySelector('#calc-input').style.fontSize = '30px'
    }
    
    if (calcInputVar === Infinity) {
        calcInputVar = 'Cannot divide by zero'
    }

    if (result !== undefined && result.toString().includes('.')) {
        let brPoint = result.toString().split('.')

        if(brPoint[1].length>15) {           
            result = result.toFixed(12)
        }        
    }
}

function resolveOp (opFc, noTwo, noOne) {
    let resFc
    if(opFc === '+') {
        resFc = parseFloat(noTwo) + parseFloat(noOne)
    }
    if(opFc === '-') {
        resFc = parseFloat(noTwo) - parseFloat(noOne)
    }
    if(opFc === '*') {
        resFc = parseFloat(noTwo) * parseFloat(noOne)
    }
    if(opFc === '/') {
        resFc = parseFloat(noTwo) / parseFloat(noOne)
    }
    if(opFc === 'sqrt') {
        resFc = Math.sqrt(noOne)
    }
    return resFc
}

function displayInp2 (calcInp1, op, calcInp2, eq) {
    calcInput2.value = calcInp1 + " " + op + " " + calcInp2 + " " + eq
}