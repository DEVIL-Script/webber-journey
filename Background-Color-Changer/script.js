const darkColorsArr = [
    '#2c3e50', '#34495e', '#16a085', '#27ae60',
    '#2980b9', '#8e44ad', '#2c3e50', '#d35400',
    '#c0392b', '#7f8c8d'
];

const body = document.querySelector('body');
const bgHexCodeSpanElement = document.getElementById('bg-hex-code');
const btn = document.getElementById('btn');

function getRandomIndex(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return randomIndex;
}

function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex(darkColorsArr)];
    
    body.style.backgroundColor = color;
    bgHexCodeSpanElement.textContent = color;
}

btn.addEventListener('click', changeBackgroundColor);
