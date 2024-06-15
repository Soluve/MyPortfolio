function appendTextToScreen(text){
    let screen = document.getElementById('screen')

    if (text === 'AC'){
        screen.textContent = '0'
        
    }

    else if(screen.textContent === '0'){
        screen.textContent = text;
    }else {
        if (screen.textContent.length < 14) {
            screen.textContent = screen.textContent + text;
        }
        else {
            screen.textContent = screen.textContent.slice(0, 14);
        }
    }
    
}

function calculate() {
    let screen = document.getElementById('screen');

    // Replace square root symbol '√' with 'Math.sqrt('
    

    // Replace 'x' and '÷' with '*' and '/'
    if (screen.textContent.includes('x') || screen.textContent.includes('/') || screen.textContent.includes('%')) {
        screen.textContent = screen.textContent.replace(/x/g, '*').replace(/÷/g, '/');
        screen.textContent = screen.textContent.replace(/%/g, '/100')
    }
    try {
        
            let result = eval(screen.textContent);
            screen.textContent = result;
    }
     catch (error) {
        screen.textContent = 'Error';
    }

    if (screen.textContent === 'Error') {
        // Reset to '0' only if there was an error
        screen.textContent = '0';
    }
}
function percent(number) {
    result = number/100
    return result;
}
function displayPercentage() {
    let screen = document.getElementById('screen');
    result = percent(screen.textContent);
    screen.textContent = result;
}
function calculateSquareroot() {
    let screen = document.getElementById('screen');
    let result = Math.sqrt(screen.textContent);
    screen.textContent = result;
}