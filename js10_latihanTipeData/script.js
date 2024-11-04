let angka_1,angka_2,hasil;

document.getElementById("button").onclick = function(){
    angka_1 = document.getElementById("number_1").value;
    console.log(angka_1)
    
    angka_2 = document.getElementById("number_2").value;
    console.log(angka_2)
    
    angka_1 = parseInt(angka_1);
    angka_2 = parseInt(angka_2);

    hasil = angka_1 + angka_2;

    document.getElementById("hasil").textContent = hasil;
}