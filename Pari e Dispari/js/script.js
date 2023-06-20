const formButton = document.getElementById('form-button')


function getRndNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


formButton.addEventListener('click' , function(e){
    const numberFromInput = document.getElementById('numberFromInput').value;
    console.log(numberFromInput)

    if(numberFromInput > 5 || numberFromInput < 1) {
        alert ('insert 1 to 5')
    }

    console.log(getRndNumber(1, 5))
    
})


