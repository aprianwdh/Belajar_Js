// macam macam tipe data number

// 1.int
let dataInt = 12;//bilangan bulat
console.log(dataInt);

// 2.float
let dataFloat = 12.3;
console.log(dataFloat);

// 3.big int
let bigInt = 123312141341344141413143144214244124142442n;
console.log(bigInt);
console.log(typeof bigInt);

// contoh penggunaan
let pembelian = "120000";
let pajak = 1000

let harga = parseFloat(pembelian) + pajak;
console.log(harga);