const SHOW = document.getElementById('show_01');
const BTNCLK = document.getElementById('button_01');

BTNCLK.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 100) + 1;
    console.log(random);
    if (random < 11) {
        SHOW.innerHTML = '神レア!!!!!!';
    } else if (11 <= random && random < 31) {
        SHOW.innerHTML = 'けっこうレア!!!';
    } else if (31 <= random && random < 61) {
        SHOW.innerHTML = 'まぁまぁレア!'
    } else {
        SHOW.innerHTML = 'ぜんっぜんっレアじゃない'
    }
})