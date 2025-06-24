const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const maxLength = 50;

textInput.addEventListener('input', function() {
    const currentLength = this.value.length;
    
    if (currentLength > maxLength) {
        this.value = this.value.substring(0, maxLength);
        return;
    }
    
    charCount.textContent = `Character Count: ${currentLength}/${maxLength}`;
    
    if (currentLength === maxLength) {
        charCount.classList.add('limit-reached');
    } else {
        charCount.classList.remove('limit-reached');
    }
});
