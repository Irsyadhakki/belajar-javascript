//Var 
//Let
//Const

// var i = 10;

// console.log(i);
// let i = 10; //maka dia akan eror memkai let iini
// const i = 10; eror juga
// function tes() {
//     for (var i = 0; i < 10; i++) {
//         console.log(i);
//     }
// }

// tes();
// console.log(i); //erorr

// (function() {
//     for (var i = 0; i < 10; i++) {
//         console.log(i);
//     }
// })();

// console.log(i); //sama persis dengan let

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


// const i = 10;
// i = 20;//eror //tidak bisa diisi ulang karna const = konstanta tidak bisa di ubah \\gak sepenuhnya gk bisa diubah
// const mhs = {
//     nama: 'hakki',
//     umur: 20
// }

// mhs.umur = 21;

// console.log(mhs);


const i = [1, 2, 3, 4, 5];
i.push(6);
console.log(i);

//gunakan let ketika anda bikin for(perulangan) aja

//menggunakan const untuk meminiimalisir perubahan state

// Penjelasan tentang var, let, dan const

// VAR:
// - Dideklarasikan dengan kata kunci `var`.
// - Bersifat function-scoped (hanya terbatas dalam fungsi).
// - Tidak memiliki block-scope, sehingga bisa diakses di luar blok seperti `if` atau `for`.
// - Mendukung hoisting: deklarasi `var` akan diangkat ke atas (diinisialisasi dengan undefined).
var x = 10;
console.log(x); // Output: 10

// LET:
// - Dideklarasikan dengan kata kunci `let`.
// - Bersifat block-scoped (hanya bisa diakses dalam blok tempat ia dideklarasikan).
// - Tidak mendukung hoisting seperti `var`, sehingga tidak bisa digunakan sebelum deklarasi.
let y = 10;
console.log(y); // Output: 10

// CONST:
// - Dideklarasikan dengan kata kunci `const`.
// - Bersifat block-scoped, seperti `let`.
// - Nilainya tidak dapat diubah (immutable) setelah deklarasi.
// - Namun, objek atau array yang dibuat dengan `const` bisa diubah elemennya (mutable).
const z = 10;
// z = 20; // Error: Assignment to constant variable

// Contoh penggunaan `const` dengan objek
const mahasiswa = {
    nama: 'Hakki',
    umur: 20
};

// Nilai properti objek bisa diubah
mahasiswa.umur = 21;
console.log(mahasiswa); // Output: { nama: 'Hakki', umur: 21 }

// Contoh penggunaan `const` dengan array
const angka = [1, 2, 3, 4, 5];
angka.push(6); // Menambahkan elemen ke array diperbolehkan
console.log(angka); // Output: [1, 2, 3, 4, 5, 6]

// Kesimpulan penggunaan:
// - Gunakan `let` ketika Anda memerlukan variabel yang nilainya bisa berubah dan memiliki cakupan blok.
// - Gunakan `const` untuk variabel yang nilainya tidak berubah, untuk meminimalisir perubahan state.
// - Hindari penggunaan `var` karena dapat menyebabkan bug akibat hoisting dan sifatnya yang tidak block-scoped.