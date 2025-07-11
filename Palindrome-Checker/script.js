
document.addEventListener('DOMContentLoaded', () => {
    const checkBtn = document.getElementById('check-btn');
    const textInput = document.getElementById('text-input');
    const resultDiv = document.getElementById('result');
    
    checkBtn.addEventListener('click', () => {
        const inputValue = textInput.value.trim();
        
        if (!inputValue) {
            alert('Please input a value');
            return;
        }
        
        const isPalindrome = checkPalindrome(inputValue);
        resultDiv.textContent = `${inputValue} is ${isPalindrome ? '' : 'not '}a palindrome`;
        resultDiv.className = isPalindrome ? 'palindrome' : 'not-palindrome';
    });
    
    function checkPalindrome(str) {
        const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        return cleanedStr === cleanedStr.split('').reverse().join('');
    }
});
