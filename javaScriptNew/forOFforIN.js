//for .. of

// const mhs = ['hakki', 'irsyad', 'yohan'];

// mhs.forEach(m => console.log(m));

// for (const m of mhs) {
//     console.log(m)
// }

//string
// const nama = 'hakki';
// for (const n of nama) {
//     console.log(n)
// }

// const mhs = ['hakki', 'irsyad', 'yohan'];

// mhs.forEach((m, i) => { console.log(`${m} adalah mahasiswa ke- ${i+1}`) });

//nodeList
// const nama = document.querySelectorAll('.nama');

// // nama.forEach(n => console.log(n.textContent));
// for (n of nama) {
//     console.log(n.innerHTML);
// }


//arguments
// const arr = [1, 2, 3, 4, 5];
// console.log(arr)

function jumlahAngka() {
    // return [1, 2, 3, 4, 5].reduce((a, i) => a + i);  X
    // let jumlah = 0;
    // arguments.forEach(a => jumlah += a);  X
    let jumlah = 0;
    for (a of arguments) {
        jumlah += a;

    }


    return jumlah;

}

console.log(jumlahAngka(1, 2, 3, 4, 5));


//for in

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

for (m in mhs) {
    console.log(mhs[m]);
}