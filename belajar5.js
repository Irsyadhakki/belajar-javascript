//belajar method filter
//filter itu fungsinya untuk mencari nilai dari sebuah array dan mengembalikan nya dalam bentuk array


// var array = [1, 2, 30, 12, 14, 3, 4, 5, 13, 6, 7, 8, 9, 10];
// var array2 = array.filter(function(no) {

//     return no > 8;
// });
// console.log(array2.join(' '));


//belajar method find
//find itu hanya menemukan satu nilai saja jika no > 11 maka dia akan menemuka no yg pertama output : 9
// find ini hanya mencari nilai paling besar dari nilai yang paling awal contoh [1,2,7,4,6,12,30,3,5] jika no > 7 maka outputnya 12
var array = [1, 2, 11, 12, 14, 3, 5, 13, 6, 70, 8, 9, 10];
var array2 = array.find(function(no) {

    return no > 14;
});
console.log(array2); // find tidak mengembalikan array tapi hanya mengembalikan nilai //tidak bisa menggunakan join