//spread oprator
//memecah iterables menjadi single element

// const mhs = ['hakki', 'irsyad', 'hakiki'];
// const dosen = ['jeromi', 'keo', 'bro']

// console.log(...mhs[0]);

// console.log(...mhs, 'dea', ...dosen);

// const orang = [...mhs, 'dea', ...dosen];
// // const orang = mhs.concat(dosen);

// console.log(orang)


//mengcopy array
// const mhs = ['hakki', 'irsyad', 'hakiki', 'johan'];
// // const mhs1 = mhs;
// // mhs1[0] = 'fajar';

// const mhs1 = [...mhs];
// mhs1[0] = 'fajar';
// console.log(mhs1);

// const limhs = document.querySelectorAll('li');
// const mhs = [...limhs].map(m => m.textContent);

// console.log(mhs);

const nama = document.querySelector('.saya');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;


//rest Parameter

// function Myfunc(a, ...MyArg) {
//     return `a = ${a} ,my arg = ${MyArg}`;

// }

function Myfunc(...angka) {
    // let total = 0;
    // for (const a of angka) {
    //     total += a;
    // }

    // return total;

    return angka.reduce((a, b) => a + b)

}

console.log(Myfunc(1, 2, 3, 4, 5, 6));