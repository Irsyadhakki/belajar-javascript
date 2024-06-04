//belajar  array []
// array bisa menyimpan elemen dri berbagai tipe
// contoh
// var array = ['kucing',12, false]; "array juga bisa menyimpan function"

//contoh array multidimensi 
// var array = [[1,2,3, ['kelinci',12, false]];
//contoh cara menampilkan array multidimensi
// console.log(array[3][0]);
// outputnya 'kelinci' ingat index array selalu dimulai dari 0

//cara manipulasi array
// menambah isi array


// var array = [];
// array[0] = 'kucing';
// array[1] = 'anjing';
// array[2] = 'harimau';
// array[3] = 'puma';
// array[4] = 'cheetah';
// array[5] = 'harimau';
// array[6] = 'jaguar';
// array[7] = 'macan';


// console.log(array[1]);

//menghapus isi array secara manual
// var array = ['kucing', 'anjing', 'harimau', 'puma', 'cheetah', 'harimau', 'jaguar', 'macan'];

// array[1] = undefined;

// console.log(array[1]);

//method array
// kegunnaan "length" untuk mengetahui panjang array atau untuk mengetahui jumlah elemen
// kegunaan "join" untuk menggabungkan seluruh isi array dan mengubahnya menjadi string
// kegunaan push dan pop untuk menambah dan menghapus array
// kegunaan unshift dan shift untuk menambah dan menghapus array pada awal dan akhir

// 1.contoh length
// var array = ['kucing', 'anjing', 'harimau', 'puma', 'cheetah', 'harimau', 'jaguar', 'macan'];

// for (var i = 0; i < array.length; i++) {
//     console.log('binatang ' + i + ' adalah ' + array[i]);
// }


// 2.contoh join
// var array = ['kucing', 'anjing', 'harimau', 'puma', 'cheetah', 'harimau', 'jaguar', 'macan'];

// console.log(array.join('  '));


// 3.contoh push dan pop
// var array = ['kucing', 'anjing', 'harimau', 'puma', 'cheetah', 'harimau', 'jaguar', 'macan'];

// array.push('macan kumbang'); //bisa menambahkan elemen // array.push('macan kumbang', 'gajah');

// array.pop(); //menghapus elemen terakhir dan tidak bisa menambahkan elemen harus 1 per 1
// array.pop();

// console.log(array);

//contoh unshift dan shift
// var array = ['kucing', 'anjing', 'harimau', 'puma', 'cheetah', 'harimau', 'jaguar', 'macan'];
// array.shift('macan kumbang'); //akan menghapus elemen

// array.unshift('macan kumbang'); //akan menambahkan elemen

// console.log(array);

//contoh splice
// var array = ['kucing', 'anjing', 'harimau', 'puma', 'cheetah', 'harimau', 'jaguar', 'macan'];
// array.splice(4, 0, 'macan kumbang'); //menghapus dan menambahkan elemen // index dihitung dari 0
// console.log(array);

//contoh slice

var array = ['kucing', 'anjing', 'harimau', 'puma', 'cheetah', 'jaguar', 'macan'];
//slice menghasilkan array baru
var Array2 = array.slice(2, 4); //mengambil elemen // index dihitung dari 0 (2, 5); //mengambil elemen
console.log(array.join(' '));
console.log(Array2.join(' '));