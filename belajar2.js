// membuat game tebak tebak an angka sederhana

alert('lo main tebak-tebakan angka nggak?');
var maxPercobaan = 3;
var angkaTebakan = Math.floor(Math.random() * 10) + 1;
var tebakanPemain;
var percobaan = 0;


while (percobaan < maxPercobaan) {
    tebakanPemain = parseInt(prompt('Masukkan tebakanmu (angka dari 1 sampai 10):'));

    if (tebakanPemain < angkaTebakan) {
        alert('Tebakan lo terlalu rendah bro!');
    } else if (tebakanPemain > angkaTebakan) {
        alert('Tebakan lo ketinggian!');
    } else if (tebakanPemain === angkaTebakan) {
        alert('wihh bener keren lo: ' + angkaTebakan);
        break; // Keluar dari loop jika tebakan benar
    } else {
        alert('lu ketik lo kontol.');
    }

    percobaan++;

    if (percobaan === maxPercobaan && tebakanPemain !== angkaTebakan) {
        alert('udah ya kesempatan lu udh abis jawaban nya adalah ini: ' + angkaTebakan + (' wkwkww'));
    }
}

console.log('game complete: ' + angkaTebakan);
//fungsi math.floor adalah membulatkan angka ke bawah ke bilangan bulat terdekatt

//berbeda dengan math.ceil membulatkan angka ke atas ke bilangan bulat terdeka
// sedangkan math.round fungsinya adalah membulatkan angka ke bilangan bulat terdekat
// untuk yang math.trunc menghilangkan bagian desimal dari angka contoh desimal(1.0, -7.25, 3.14)hanya menyisakan bagian bulat