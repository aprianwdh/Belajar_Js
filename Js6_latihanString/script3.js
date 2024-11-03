let nomor_1,nomor_2,hasil;

document.getElementById("button_tambah").onclick = function(){
    nomor_1 = document.getElementById("nomor_1").value;
    nomor_2 = document.getElementById("nomor_2").value;

    nomor_1 = parseInt(nomor_1);
    nomor_2 = parseInt(nomor_2);

    hasil = nomor_1 + nomor_2;

    document.getElementById("hasil").textContent = `Hasil dari ${nomor_1} + ${nomor_2} = ${hasil}`
}

document.getElementById("button_kurang").onclick = function(){
    nomor_1 = document.getElementById("nomor_1").value;
    nomor_2 = document.getElementById("nomor_2").value;

    nomor_1 = parseInt(nomor_1);
    nomor_2 = parseInt(nomor_2);

    hasil = nomor_1 - nomor_2;

    document.getElementById("hasil").textContent = `Hasil dari ${nomor_1} - ${nomor_2} = ${hasil}`

}

document.getElementById("button_kali").onclick = function(){
    nomor_1 = document.getElementById("nomor_1").value;
    nomor_2 = document.getElementById("nomor_2").value;

    nomor_1 = parseInt(nomor_1);
    nomor_2 = parseInt(nomor_2);

    hasil = nomor_1 * nomor_2;

    document.getElementById("hasil").textContent = `Hasil dari ${nomor_1} * ${nomor_2} = ${hasil}`

}

document.getElementById("button_bagi").onclick = function(){
    nomor_1 = document.getElementById("nomor_1").value;
    nomor_2 = document.getElementById("nomor_2").value;

    nomor_1 = parseInt(nomor_1);
    nomor_2 = parseInt(nomor_2);

    hasil = nomor_1 / nomor_2;

    document.getElementById("hasil").textContent = `Hasil dari ${nomor_1} / ${nomor_2} = ${hasil}`

}