//belajar function

//function ekspresi yang dimana var yang menyimpan sebuah function
var penjumlahan = function(a, b, c) {
    var hasil = a + b + c;

    return hasil;
}

alert(penjumlahan(1, 2, 2));

//#################

var j = function(nama) {
    alert('halo ' + nama)

}
j('haki');


//function deklarasi 
//fungsi deklarasi ini fleksibel dapat ditulis dimanapun
function menjumlahkan(a, b, c, d) {

    var total = a * b + c - d;

    return total;

}

alert(menjumlahkan(3, 45, 3, 2));