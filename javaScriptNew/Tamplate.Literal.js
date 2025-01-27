// const mhs = {
//     nama: 'hakki',
//     umur: 20,
//     nim: 123,
//     ipk: 0.20,
// }

// const le =
//     `<div class="mhs">
//         <h2>${mhs.nama}</h2>
//         <span class="nim">${mhs.nim}</span>
//     </div>`;

// document.body.innerHTML = le;

//looping cara

// const mhs = [{

//         nama: `hakki`,
//         umur: 20
//     },
//     {

//         nama: `jay`,
//         umur: 20
//     },
//     {

//         nama: `red`,
//         umur: 20
//     },
//     {

//         nama: `keta`,
//         umur: 20
//     },


// ];

// const el = mhs.map(m => `<ul>
//     <li>${m.nama}</li><li>${m.umur}</li></ul>`).join('');
// document.body.innerHTML = el


//pengkondisian

// const lagu = [{
//         judul: 'waktu ini',
//         penulis: 'hakki',
//         feat: 'fredy',
//     },
//     {
//         judul: 'seandainya',
//         penulis: 'red',
//         feat: 'devi',
//     },
//     {
//         judul: 'seandainya',
//         penulis: 'end',
//     },
// ];

// const el = lagu
//     .map(
//         (item) => `
// <div class="lagu">
//     <ul>
//         <li>${item.judul}</li>
//         <li>${item.penulis} ${item.feat ? `(feat. ${item.feat})` : ''}</li>
//     </ul>
// </div>`
//     )
//     .join(''); // Gabungkan hasil map menjadi string

// document.body.innerHTML = el;


//html fragment bersarang
//nested


const mhs = {
    nama: 'hakki',
    umur: 19,
    semester: 4,
    matkul: [
        `pemrograman web`,
        `web design`,
        `pemrograman mobile`,
        `Pembelajarn`,
    ]

};

// function CetakMatkul(matkul) {
//     return `<ol>
//         ${matkul.map(mk => `<li>${mk}</li>`).join('')}
//     </ol>`
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <h2>${mhs.umur}</h2>
//     <span>Semester : ${mhs.semester}</span>
//     <h4>Mata kuliah</h4>
//     ${CetakMatkul(mhs.matkul)}
// </div>`;

// document.body.innerHTML = el;

//tagged tamplate

const nama = `hakki`;
const umur = 19;
const asal = `mataram`;

function highlight(strings, ...values) {
    // let result = ``;
    // strings.forEach((str, i) => {
    //             result += `${str}${values[i] || ``}`;
    // })

    // return result;

    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || '' }</span>`, '');

}

const str = highlight `halo nama saya ${nama} dan umur saya ${umur} tahun dan saya dari ${asal}`;

document.body.innerHTML = str;