//objek literal
//gak efektif untuk objek yang banyak

let mahasiswa = {
    nama: 'budi',
    energy: 10,

    makan: function(porsi) {
        this.energy = this.energy + porsi;
        console.log('hai, ' + this.nama + ', selamat makan ');
    }

}

let mahasiswa2 = {
    nama: 'andi',
    energy: 20,

    makan: function(porsi) {
        this.energy = this.energy + porsi;
        console.log('hai, ' + this.nama + ', selamat makan ');
    }


}

// // function declaration

// const methodMahasiswa = {
//     makan: function(porsi) {
//         this.energy = porsi;
//         console.log('hai, ' + this.nama + ', selamat makan ');
//     },

//     main: function(jam) {
//         this.energy = this.energy - jam;
//         console.log('hai, ' + this.nama + ', selamat main ');
//     },

//     tidur: function(jam) {
//         this.energy = this.energy + jam * 2;
//         console.log('hai, ' + this.nama + ', selamat tidur ');
//     }

// }

// function Mahasiswa(nama, energy) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;
//     mahasiswa.makan = methodMahasiswa.makan
//     mahasiswa.main = methodMahasiswa.main
//     mahasiswa.tidur = methodMahasiswa.tidur


//     return mahasiswa;
// }

// let hakki = Mahasiswa('hakki', 10);
// let devil = Mahasiswa('devil', 20);

//constractor function

// function Mahasiswa(nama, energy) {

//     this.nama = nama;
//     this.energy = energy;

//     this.makan = function(porsi) {
//         this.energy = porsi;
//         console.log('hai, ' + this.nama + ', selamat makan ');
//     }

//     this.main = function(jam) {
//         this.energy = this.energy - jam;
//         console.log('hai, ' + this.nama + ', selamat main ');
//     }

// }

// let hakki = new Mahasiswa('hakki', 10);
// let devil = new Mahasiswa('devil', 20);


//objeck create


// const methodMahasiswa = {
//     makan: function(porsi) {
//         this.energy = porsi;
//         console.log('hai, ' + this.nama + ', selamat makan ');
//     },

//     main: function(jam) {
//         this.energy = this.energy - jam;
//         console.log('hai, ' + this.nama + ', selamat main ');
//     },

//     tidur: function(jam) {
//         this.energy = this.energy + jam * 2;
//         console.log('hai, ' + this.nama + ', selamat tidur ');
//     }

// }

// function Mahasiswa(nama, energy) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;



//     return mahasiswa;
// }

// let hakki = Mahasiswa('hakki', 10);
// let devil = Mahasiswa('devil', 20);


//prototype 

// function Mahasiswa(nama, energy) {
//     this.nama = nama;
//     this.energy = energy;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energy += porsi;
//     return 'Hai, ' + this.nama + ', selamat makan!';
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energy -= jam;
//     return 'Hai, ' + this.nama + ', selamat main!';
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energy += jam * 2;
//     return 'Hai, ' + this.nama + ', selamat tidur!';
// }
// let hakki = new Mahasiswa('Hakki', 10);


//versi class 

class Mahasiswa {
    constructor(nama, energy) {
        this.nama = nama;
        this.energy = energy;

    }

    makan(porsi) {
        this.energy += porsi;
        console.log('hai, ' + this.nama + ', selamat makan');
    }

    main(jam) {
        this.energy -= jam;
        console.log('hai, ' + this.nama + ', selamat main');
    }

    tidur(jam) {
        this.energy += jam * 2;
        console.log('hai, ' + this.nama + ', selamat tidur');
    }
}

let hakki = new Mahasiswa('Hakki', 10);