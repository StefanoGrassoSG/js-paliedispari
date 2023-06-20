
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

const input = prompt('insert a word to check if is palindrome');



const result = checkPali(input);

