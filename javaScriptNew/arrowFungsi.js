// const i = (nama) => {
//     alert('hello ' + nama);
// }

// i("hakki"); //arrow function

// const tampilNama = (nama//1parameter) => {
//     console.log('hallo ' + nama);
// }

// tampilNama("hakki");

//kalau parameternya lebih dari satu 

// implisit return
// const tampilNama = nama => `halo ${nama}`;
// console.log(tampilNama("hakki"))


// const hallo = () => `halloWorld`;
// console.log(hallo())

// let mahasiswa = ['hakki', 'deil', 'irsyad'];

// let jumlah = mahasiswa.map(function(nama) {
//     return nama.length;
// });

// console.log(jumlah);

// let jumlah = mahasiswa.map(nama => nama.length);
// console.log(jumlah)

// let jumlah = mahasiswa.map(nama => ({ nama: nama, jmlHuruf: nama.length }));
// console.table(jumlah)


//konsep this pada arrow function

//constructor function

// const mahasiswa = function() {
//     this.nama = 'hakki';
//     this.umur = 20;
//     this.sayHello = function() {
//         console.log(`Hai, nama saya ${this.nama} dan umur saya ${this.umur} tahun`);
//     }
// }

// const hakki = new mahasiswa();


// const mahasiswa = function() {
//     this.nama = 'hakki';
//     this.umur = 20;
//     this.sayHello = () => {
//         console.log(`Hai, nama saya ${this.nama} dan umur saya ${this.umur} tahun`);
//     }
// }

// const hakki = new mahasiswa();


//objek literal 
// const mhs = {
//     nama: 'hakki',
//     umur: 20,
//     sayHello: () => {
//         console.log(`Hai, nama saya ${this.nama} dan umur saya ${this.umur} tahun`);
//     }
// }

// const mahasiswa = function() {
//     this.nama = 'hakki';
//     this.umur = 20;
//     this.sayHello = function() {
//         console.log(`Hai, nama saya ${this.nama} dan umur saya ${this.umur} tahun`);
//     }

//     setInterval(() => {
//         console.log(this.umur++);

//     }, 500)
// }

// const hakki = new mahasiswa();


const box = document.querySelector('.box');
box.addEventListener('click', function() {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }



    this.classList.toggle('size');
    setTimeout(() => {
        this.classList.toggle('caption');
    }, 600)
})