const addButton = document.getElementById('addButton');
let progress1 = 0;
let progress2 = 0;

addButton.addEventListener('click', () => {
    if (progress1 < 100) {
        progress1 += 10; 
        document.getElementById('progressBar1').style.width = progress1 + '%';
    }
    if (progress2 < 100) {
        progress2 += 5; 
        document.getElementById('progressBar2').style.width = progress2 + '%';
    }
});
