const ekran = document.querySelector('#makine-ekran');
const tuslar = document.querySelectorAll('.makine-tuslar button');
let giris = '';

tuslar.forEach(function (tus) {
    tus.addEventListener('click', () => {
        const islem = tus.value;
        if (islem === 'clear') {
            giris = '';//bütün ifadeyi ve devamında ekranıda temizlemekte.
        } else if (islem === '=') {//eşittire basıldığında metodu string türündeki matematiksel işlemi yapması için çağırıyor.
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
/*Basılan her tuşun değeri öncelikle bir değişkene(islem) alınmakta ve bu değişken her tuş basımından sonra giris değişkenine önceki değerler ile birleştirilmekte ve giriş değişkeni*/
/*ekrana yazdırılmakta*/
//temizle tuşuna basıldığında ise giris değişkeni sıfırlanmakta
