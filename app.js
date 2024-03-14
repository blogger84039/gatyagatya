const SHOW = document.getElementById('show_01');
const BTNCLK = document.getElementById('button_01');

BTNCLK.addEventListener('click', () => {
    alert('結果は…!');
    let random = Math.floor(Math.random() * 100) + 1;
    if (random < 2) {
        SHOW.innerHTML = '神レア!!!!!!';
    } else if (2 <= random && random < 17) {
        SHOW.innerHTML = 'けっこうレア!!!';
    } else if (17 <= random && random < 51) {
        SHOW.innerHTML = 'まぁまぁレア!'
    } else {
        SHOW.innerHTML = 'ぜんっぜんっレアじゃない'
    }
})
