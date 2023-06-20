const formButton = document.getElementById('form-button')



formButton.addEventListener('click' , function(e){
    const numberFromInput = document.getElementById('numberFromInput').value;
    console.log(numberFromInput)

    if(numberFromInput > 5 || numberFromInput < 1) {
        alert ('insert 1 to 5')
    }
})