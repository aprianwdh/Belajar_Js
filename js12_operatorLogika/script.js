// operato logika or,and,not

// not
// kebalikan dari data
let teru = true;
let fales = false;
console.log(`!True = ${!teru}`);
console.log(`!False = ${!fales}`);

console.log("==========================")

// or
//        false  false  true  true
//        false  true   false true
// hasil  false  true   true  true
console.log(`false || false =  ${fales || fales}`);
console.log(`false || true =  ${fales || teru}`);
console.log(`true || false =  ${teru || fales}`);
console.log(`true || true =  ${teru || teru}`);

console.log("==========================")

// and
//        false  false  true  true
//        false  true   false true
// hasil  false  false   false  true
console.log(`false && false =  ${fales && fales}`);
console.log(`false && true =  ${fales && teru}`);
console.log(`true && false =  ${teru && fales}`);
console.log(`true && true =  ${teru && teru}`);
