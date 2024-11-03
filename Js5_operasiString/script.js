// 1.mengambil char (charAt)
let dataString = "aku kamu dan javaScript";
let dataChar = dataString.charAt(0);
console.log(dataChar);
dataChar = dataString.charAt(1);
console.log(dataChar);
dataChar = dataString.charAt(2);
console.log(dataChar);

// menempel string (concat)
let namaDepan = "mansyuru";
let namaBelakang = "Sumansyir";
let namaLengkap = namaDepan.concat(" ",namaBelakang);
console.log(namaLengkap);

// mengambil index 
let indexNamaDepan = namaDepan.indexOf("u");//yang paling awal u adalah index ke 5
console.log(indexNamaDepan);

// substring
let substring = namaLengkap.substring(8,0);//mengambil char dari inde ke 0 - 7(8 tidak dihitung)
console.log(substring);
substring = namaLengkap.substring(0,8);//bisa dibalik balik
console.log(substring);

// slice
let slicee = namaDepan.slice(0,8);
console.log(slicee);
slicee = namaDepan.slice(0,8)//tidak bisa dibalik balik
console.log(slicee);

// replace
let namaBaru = namaLengkap.replace("mansyuru","Mamat");//akan mengganti mansyuru dengan mamat
console.log(namaBaru);

// to lower
console.log(namaLengkap.toLowerCase());

// to upper
console.log(namaLengkap.toUpperCase());

// pharse
let dataStr = "99";
console.log(typeof dataStr);

let dataInt = parseInt(dataStr);
console.log(dataInt);
console.log(typeof dataInt);

dataStr = "14.3"
let dataFloat = parseFloat(dataStr);
console.log(dataFloat);
console.log(typeof dataFloat);
