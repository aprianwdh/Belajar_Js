// Nan -> not a number (sebuah operasi yang tidak menghasilkan number)

let dataNaN = "ujang" / "memes";
console.log(`hasil dari Ujang / memes = ${dataNaN}`);

dataNaN = "ujang" * "memes";
console.log(`hasil dari Ujang * memes = ${dataNaN}`);

dataNaN = "ujang" + "memes";
console.log(`hasil dari Ujang + memes = ${dataNaN}`);//tidak menghasilkan NaN

dataNaN = "ujang" - "memes";
console.log(`hasil dari Ujang - memes = ${dataNaN}`);

let dataNaN2 = Math.sqrt(-1);
console.log(dataNaN2);
console.log(dataNaN2 - 5);//Nan sudah tidak bisa dioperasikan ygy


//Undefine -> data yang belum atau tidak diketahui valuenya
let a;
console.log(a);

console.log(console.log("saa"));