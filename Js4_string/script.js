// 1.escaping string
// penggunaan karakter khusus \"
let data1 = 'Seorang Filsuf berkata "Orang yang bahkan tidak berani bermimpi tidak pantas menertawakan mimpi orang lain"';
console.log(data1);
let data2 = "Pak Rt berkata \"kita ini harus kerja bakti\"";
console.log(data2);

// penggunaan /t (tab)
let jadwal1 = 'senin \t= matematika';
let jadwal2 = 'selasa \t= Bahasa Polandia';
console.log(jadwal1);
console.log(jadwal2);

// penggunaan /n (new line)
let makanan = "tolong belikan\nmoci,stroberi,coklat\npelisssssss";
console.log(makanan);


// 2.string literal (di python format string,kayaknya)
let namaDepan = "kamsi";
let namaBelakang = "Sulytan";
let umur = 12;
// namaLengkap = namaDepan + " " + namaBelakang; #ribet bgt

// lebih disarankan ygy
let namaLengkap = `${namaDepan} ${namaBelakang} berumur ${umur} tahun`;
console.log(namaLengkap);