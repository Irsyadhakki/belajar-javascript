// belajar foreach
// foreach artinya  untuk setiap elemen dari sebuah array
// var array = ['kucing', 'anjing', 'harimau', 'puma', 'cheetah', 'harimau', 'jaguar', 'macan'];

// array.forEach(function(haki, i) {

//     console.log('hewan ' + i + ' ' + haki); // jika ingin mulai dari angka 1 // console.log('hewan ' + (i+1) + ' ' + haki);

// }); //dalam kurung diluar kurung kurawal

//belajar map
// map ini mengembalika
// array sedangkan foreach tidak
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var array2 = array.map(function(haki) {
//     return haki * 4; // 


// });
// console.log(array2.join('-'));

//belajar sort
// sort adalah mengurutkan
var array = [1, 2, 30, 12, 14, 3, 4, 5, 13, 6, 7, 8, 9, 10];
array.sort(function(a, b) {

    return a - b; // kegunaan a - b adalah mengurutkan dari kecil ke besar

});

console.log(array.join('-'));