const form = document.getElementById('input-form');



form.addEventListener('submit', function(evt){
    evt.preventDefault;

    function checkPali(gth) {
        const len = gth.length;
    
        for (let i = 0; i < len / 2; i++) {
    
            if (gth[i] !== gth[len - 1 - i]) {
                alert ('is not palindrome!');
                return;
            }
        }
    
        alert('it is a palindrome!')
    }
    
    const result = document.getElementById('word').value;
    const value = checkPali(result);
})
