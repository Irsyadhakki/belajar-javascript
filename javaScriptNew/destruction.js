//destruction variable


//destruction array

const perkenalan = ['halo', 'nama saya', 'irsyad hakki'];
// const salam = perkenalan[0];
// const nama = perkenalan[2];

// const [salam, satu, nama] = perkenalan;

//skiping item
// const [salam, , nama] = perkenalan;

//swap item

// let a = 1;
// let b = 2;

// console.log(a);
// console.log(b);

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

//return velue pada function

// function coba() {
//     return [1, 2];


// }

// const [a, b] = coba()
// console.log(a)

//rest parameter (...velues)
// const [a, ...values] = [1, 2, 3, 4, 5]
// console.log(a)
// console.log(values)

//destruction object

// const mhs = {
//     nama: 'hakki',
//     umur: 19

// }

// const { nama, umur } = mhs;
// console.log(nama);

//assignment tanpa deklarasi object
// ({ nama, umur } = {
//     nama: 'irsyad hakki',
//     umur: 19

// });

// console.log(nama);

// memberikan default velues

// const mhs = {
//     nama: 'hakki',
//     umur: 19

// }

// const { nama: n, umur: u, email: e = "@email.default.com" } = mhs;
// console.log(n, u, e);

// const mhs = {
//     id: 123,
//     nama: 'hakki',
//     umur: 19,
//     email: '@hakkigmail.com'

// }

// function getId({ id }) {
//     return id;

// }

// console.log(getId(mhs));

// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];



// const jumlah = pejumlahanPerkalian(2, 3)[0];
// const kali = pejumlahanPerkalian(2, 3)[1];
// console.log(jumlah);
// console.log(kali);

// const [jumlah, kali] = pejumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

// const [jumlah, kurang, kali, bagi] = kalkulasi(2, 3);
// console.log(bagi);
// console.log(kali);


// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         bagi: a / b,
//         kali: a * b
//     }

// }

// const { bagi, kali, tambah, kurang } = kalkulasi(2, 5);
// console.log(tambah);
// console.log(bagi);
// console.log(kurang);
// console.log(kali);


//destructionfunctionargument
const mhs = {
    id: 123,
    nama: 'hakki',
    umur: 19,
    email: '@hakkigmail.com',
    nilai: {
        tugas: 10,
        uts: 5,
        uas: 10
    }

}

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
    return `halo,namaku ${nama} dan umurku ${umur} tahun dan nilai uas saya adalah ${uas}`
}

console.log(cetakMhs(mhs));