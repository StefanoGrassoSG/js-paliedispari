const formButton = document.getElementById('form-button');



function getRndNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }



submitForm.addEventListener('submit' , function(e){
    e.preventDefault();
    const numberFromInput = parseInt(document.getElementById('numberFromInput').value);
 

    let computerNum = getRndNumber(1, 6);
    let sum = numberFromInput + computerNum;
    console.log('somma dei numeri', sum)

    function isEven (sum) {
    
        if (sum % 2 == 0) {
            return true;
        }
    
        return false;
    }
    
    if (isEven(sum) == true && document.getElementById('input-select').value == "even") {
        const result = document.querySelector('h1');
        result.innerHTML = 'HAI VINTO!'
    }

    else if (isEven(sum) == false && document.getElementById('input-select').value == "shots") {
        const result = document.querySelector('h1');
        result.innerHTML = 'HAI VINTO!'
    }

    else  {
        const result = document.querySelector('h1');
        result.innerHTML = 'HAI PERSO!'
    }
    
})



