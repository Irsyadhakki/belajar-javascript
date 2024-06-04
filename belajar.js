// oprator logika javascript
// (&&) = dan (||) = atau (<= ) = lebih kecil dari (>=) = lebih besar dari
// (!==) = tidak sama dengan (===) = sama dengan "oprator identitas" (==) = sama dengan "oprator perbandingan" (!) = tidak
// (\n) = membuat garis baru 
var h = ''
for (var a = 10; a > 0; a--) {
    for (var s = 0; s < a; s++) {
        h += (' 1');
    }
    h += '\n';

}
console.log(h);

//piramida

var h = '';
for (var a = 1; a <= 7; a++) {
    for (var b = 1; b <= 7 - a; b++) {
        h += '  ';
    }
    for (var c = 1; c <= 2 * a - 1; c++) {

        h += '* ';
    }

    h += '\n';
}
console.log(h);

//piramida terbalik
var h = '';
for (var a = 7; a >= 1; a--) {
    for (var b = 1; b <= 7 - a; b++) {
        h += '  '; //kalo mau merong ke kiri tinggal di tambahkan spasi
    }
    for (var c = 1; c <= 2 * a - 1; c++) {
        h += '# ';
    }

    h += '\n';
}
console.log(h);

//    2 * a: Kali dua dari nilai variabel aa. Jika aa adalah angka, misalnya a=3a=3, maka hasilnya akan menjadi 2∗3=62∗3=6.

//    2 * a - 1: Mengurangkan 1 dari hasil perkalian dua kali nilai variabel aa. Menggunakan contoh sebelumnya a=3a=3, maka hasilnya menjadi 6−1=56−1=5.