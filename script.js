window.onload = function(){
    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null
    const outputElement = document.getElementById("result")
    const digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')

    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) {
                a += digit;
            }
            outputElement.innerHTML = a;
        } 
        else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                b += digit;
                outputElement.innerHTML = b;        
            }
        }
    }


    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML;
            onDigitButtonClicked(digitValue);
        }
    });


    document.getElementById("btn_op_mult").onclick = function() { 
        if (a === '') return;
        selectedOperation = 'x';
    }
    document.getElementById("btn_op_plus").onclick = function() {

        if (a === '') return;

        if (b !== '') {
            a = (parseFloat(a) + parseFloat(b)).toString();
            b = '';
            outputElement.innerHTML = a;
        }

        selectedOperation = '+';
    }
    document.getElementById("btn_op_minus").onclick = function() {

        if (a === '') return;

        if (b !== '') {
            a = (parseFloat(a) - parseFloat(b)).toString();
            b = '';
            outputElement.innerHTML = a;
        }

        selectedOperation = '-';
    }
    document.getElementById("btn_op_div").onclick = function() { 
        if (a === '') return;
        selectedOperation = '/';
    }

    document.getElementById("btn_op_clear").onclick = function() { 
        a = ''
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
    }


    document.getElementById("btn_op_equal").onclick = function() { 

        if (a === '' || b === '' || !selectedOperation)
            return

        switch(selectedOperation) { 
            case 'x':
                expressionResult = (+a) * (+b)
                break;
            case '+':
                expressionResult = (+a) + (+b)
                break;
            case '-':
                expressionResult = (+a) - (+b)
                break;
            case '/':
                expressionResult = (+a) / (+b)
                break;
            default:
                break;
        }
            
        a = expressionResult.toString()
        b = ''
        selectedOperation = null

        outputElement.innerHTML = a
    }

    document.getElementById("btn_op_sign").onclick = function() {

        if (!selectedOperation) {
            if (a === '') return;
            a = (parseFloat(a) * -1).toString();
            outputElement.innerHTML = a;
        } 
        else {
            if (b === '') return;
            b = (parseFloat(b) * -1).toString();
            outputElement.innerHTML = b;
        }
    }

    document.getElementById("btn_op_percent").onclick = function() {

        if (!selectedOperation) {
            if (a === '') return;
            a = (parseFloat(a) / 100).toString();
            outputElement.innerHTML = a;
        } 
        else {
            if (b === '') return;
            b = (parseFloat(b) / 100).toString();
            outputElement.innerHTML = b;
        }
    }

    document.getElementById("btn_op_backspace").onclick = function() {

        if (!selectedOperation) {
            if (a.length > 0) {
                a = a.slice(0, -1);
                outputElement.innerHTML = a || '0';
            }
        } 
        else {
            if (b.length > 0) {
                b = b.slice(0, -1);
                outputElement.innerHTML = b || '0';
            }
        }

    }

    document.getElementById("btn_op_sqrt").onclick = function() {

        if (!selectedOperation) {
            if (a === '') return;

            let value = parseFloat(a);

            if (value < 0) {
                outputElement.innerHTML = "Ошибка";
                return;
            }

            a = Math.sqrt(value).toString();
            outputElement.innerHTML = a;
        } 
        else {
            if (b === '') return;

            let value = parseFloat(b);

            if (value < 0) {
                outputElement.innerHTML = "Ошибка";
                return;
            }

            b = Math.sqrt(value).toString();
            outputElement.innerHTML = b;
        }

    }

    document.getElementById("btn_op_pow").onclick = function() {

        if (!selectedOperation) {
            if (a === '') return;
            a = Math.pow(parseFloat(a), 3).toString();
            outputElement.innerHTML = a;
        } 
        else {
            if (b === '') return;
            b = Math.pow(parseFloat(b), 3).toString();
            outputElement.innerHTML = b;
        }
    }

    document.getElementById("btn_op_factorial").onclick = function() {

        function factorial(n) {
            if (n < 0) return NaN;
            if (n === 0 || n === 1) return 1;
            let result = 1;
            for (let i = 2; i <= n; i++) {
                result *= i;
            }
            return result;
        }

        if (!selectedOperation) {
            if (a === '') return;
            a = factorial(parseFloat(a)).toString();
            outputElement.innerHTML = a;
        } 
        else {
            if (b === '') return;
            b = factorial(parseFloat(b)).toString();
            outputElement.innerHTML = b;
        }
    }

    document.getElementById("btn_change_color").onclick = function() {
        outputElement.classList.toggle("alt-color");
    }

    document.getElementById("btn_op_inverse").onclick = function() {

        if (!selectedOperation) {
            if (a === '' || parseFloat(a) === 0) {
                outputElement.innerHTML = "Ошибка";
                return;
            }

            a = (1 / parseFloat(a)).toString();
            outputElement.innerHTML = a;
        } 
        else {
            if (b === '' || parseFloat(b) === 0) {
                outputElement.innerHTML = "Ошибка";
                return;
            }

            b = (1 / parseFloat(b)).toString();
            outputElement.innerHTML = b;
        }

    }
}
