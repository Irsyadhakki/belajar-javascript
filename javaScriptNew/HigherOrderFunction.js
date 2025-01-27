// map 
// reduce
//filter

const angka = [1, 3, 4, 2, -9, 8, -3, 1, 6, -7];

// filter
//mencari angka >= 3

// const newAngka = [];


//contoh menggunkan for
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }

//filter

// const newAngka = angka.filter(a => a >= 2);

// console.log(newAngka);

//map
// const newAngka = angka.map(a => a + 1);

// console.log(newAngka);


//reduce
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0); //nilai awal

// console.log(newAngka);

//map, filter, reduce
// const nilaiAwal = angka.filter(a => a > 5) //8, 6
//     .map(a => a * 3) //24 , 18
//     .reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 42

// console.log(nilaiAwal);

const videos = Array.from(document.querySelectorAll('[data-duration]'));
let waktu = videos.filter(videos => videos.textContent.includes('Cukup'))
    .map(item => item.dataset.duration).map(waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    }).reduce((total, detik) => total + detik, 0);
const jam = Math.floor(waktu / 3600);
waktu = waktu - jam * 3600;
const menit = Math.floor(waktu / 60);
const detik = waktu - menit * 60;
console.log(waktu);


const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

const jmlhvideo = videos.filter(videos => videos.textContent.includes('Cukup')).length;

const pJumlah = document.querySelector('.jumlah-video');
pJumlah.textContent = jmlhvideo;