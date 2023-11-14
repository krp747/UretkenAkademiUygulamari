const ekran = document.querySelector('#makine-ekran');
const tuslar = document.querySelectorAll('.makine-tuslar button');
let giris = '';

tuslar.forEach(function (tus) {
    tus.addEventListener('click', () => {
        const islem = tus.value;
        if (islem === 'clear') {
            giris = '';
        } else if (islem === '=') {
            try {
                giris = eval(giris);
            } catch (error) {
                giris = 'Geçersiz islem';
            }

        } else {
            giris += islem;
        }
        ekran.value = giris;
    });
});