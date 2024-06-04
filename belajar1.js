//game sederhana

alert('lu mau maen suit ga?');
var player = prompt(" pilih nih! lu mau pick apa BATU,GUNTING atau KERTAS");

var computer = Math.random();

if (computer < 0.34) {
    computer = 'batu';
} else if (computer >= 0.34 && computer < 0.67) {
    computer = 'gunting';
} else {
    computer = 'kertas';
};

var hasil = '';
//kondisi ? nilai_jika_benar : nilai_jika_salah
//operator ternary,
if (computer == player) {
    hasil = ' draw ';
} else if (player == 'gunting') {
    hasil = (computer = 'kertas') ? ' !! ANJAY MENANG' : 'HAHAHA KALAH ';
} else if (player == 'batu') {
    hasil = (computer = 'gunting') ? '!! ANJAY MENANG' : 'HAHAHA KALAH ';
} else if (player == 'kertas') {
    hasil = (computer = 'batu') ? '!! ANJAY MENANG' : 'HAHAHA KALAH ';
} else {
    hasil = 'kontol '
}
//gimana caranya agar else itu agar tidak terikat dengan alert ini

alert('lo pilih ' + player + ' sedangkan si computer milih ' + computer + ' dan hasilnya ' + hasil);