const formButton = document.getElementById('form-button')


function getRndNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


formButton.addEventListener('click' , function(e){
    const numberFromInput = parseInt(document.getElementById('numberFromInput').value);

    let computerNum = getRndNumber(1, 6);
    console.log('numero del computer', computerNum, typeof computerNum)
    let sum = numberFromInput + computerNum;
    console.log('somma dei numeri', sum)

    


    
})


