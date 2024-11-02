// pengenalan variabel

// 1.Variabel dengan keyword let
let namaDepan = "Maha";
{
    // jadi let mendukung local scope(hanya hidup di dalam fungsi tertentu)
    let namaDepan = "Asjeci";
    console.log(namaDepan);
}
console.log(namaDepan);

// 2.Variabel dengan keyword var
var namaTengah = "Raja";
{
    // sedangkan var tidak mendukung local scope(hidup di luar fungsi)
    var namaTengah = "KIng";
    console.log(namaTengah);
}
console.log(namaTengah);

// 3.tanpa keyword
// akan dianggap menjadi var
anime = "King Kimatesu";
{
    anime = "King Chainsau men";
    console.log(anime);
}
console.log(anime);

// 4.variabel dengan const(Nilai Tetap)
const GENDER = "Laki Laki";
console.log(GENDER);
// GENDER = "Perempuan" nilai tetap tidak boleh diganti