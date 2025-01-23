//execution context ,hoisting & scope

// console.log(nama)
// var nama = 'hakki';

//creation phase pada global context
//nama var = undifine
//nama function = fn()
//ini yang dinamakan hoisting

//js mendefinisikan
//window = global objek
//this = window

//execution pase


// console.log(Text())

//outpun nya undifine
// var nama = 'hakki';
// var umur = '10';

// function Text() {
//     return 'hallo nama saya ' + nama + ' dan umur saya ' + umur;
// }

// var nama = 'hakki';
// var umur = '10';
// console.log(Text())

// function Text() {
//     return `hallo nama saya ${nama} dan umur saya ${umur}`;
// }

//function membuat local execution context
//yang didalam nya terdapat creation dan execution phase

//window
//arguments
//hoisting


// var nama = 'hakki';
// var username = 'irsyadhakiki';

// function Url(username) {
//     var githubUrl = 'https://github.com/irsyadhakki';
//     return githubUrl + '/' + username
// }

// console.log(Url("decilmycry"));

// function didalam function

// function a() {

//     console.log('hallo a');


//     function b() {
//         console.log('hallo b');



//         function c() {

//             console.log('hallo c');


//         }

//         c();
//     }

//     b();

// }

// a();


// function satu() {
//     var nama = 'hakki'
//     console.log(nama);
// }

// function dua() {
//     console.log(nama);
// }


// console.log(nama);
// var nama = 'devil';
// satu();
// dua("xioming");
// console.log(nama);


//closures
//closures merupakan kombinasi antara funtion dan lingkungan lexical scope didalam function tersebut
//closure adlaah sebuah function  ketika memiliki akses ke parent scope nya,meskipun parent scope nya sudah di eksekusi
//closures adalah sebuah funtion dikembalikan oleh function yang lain ,yang memiliki akses ke lingkungan saat ia diciptakan
//closures adalah sebuah funtion yang sebelumnya sudah memiliki data,hasil function yang lain.


// function Text() {
//     let nama = 'hakki';

//     function tampilNama() {
//         // let nama = 'devil';
//         console.log(nama);
//     }

//     // tampilNama();
//     console.dir(tampilNama);

// }

// Text();


// Contoh penggunaan Factory Function dalam JavaScript

// Function Ucapan adalah sebuah Factory Function.
// Artinya, function ini mengembalikan sebuah function baru.
// // Factory Function berguna untuk membuat fungsi yang lebih spesifik berdasarkan parameter yang diberikan.
// function Ucapan(waktu) {
//     return function(nama) {
//         // Function yang dikembalikan akan menggunakan parameter dari function utama (waktu)
//         // dan parameter dari function itu sendiri (nama).
//         console.log(`Hallo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }

// // Membuat fungsi khusus menggunakan Factory Function
// let selamatPagi = Ucapan('pagi'); // selamatPagi sekarang adalah function yang mengucapkan selamat pagi
// let selamatMalam = Ucapan('malam'); // selamatMalam untuk ucapan malam
// let selamatSore = Ucapan('sore'); // selamatSore untuk ucapan sore

// // Menggunakan fungsi hasil dari Factory Function
// selamatPagi('Hakki'); // Output: Hallo Hakki, selamat pagi, semoga harimu menyenangkan!
// selamatMalam('Dina'); // Output: Hallo Dina, selamat malam, semoga harimu menyenangkan!
// selamatSore('Radi'); // Output: Hallo Rani, selamat sore, semoga harimu menyenangkan!




let add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})();


counter = 100;
// let a = add();
console.log(add());
console.log(add());
console.log(add());