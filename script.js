const colorBtn = document.querySelector('#color-button');
const color = document.querySelector('.color');

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

colorBtn.addEventListener('click', function() {
    // HEX COLORS
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomValue()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function randomValue() {
    return Math.floor(Math.random() * hex.length);
}

randomValue();