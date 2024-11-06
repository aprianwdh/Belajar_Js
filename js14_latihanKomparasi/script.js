
let aritmatikaAngka1,operatorAritmatika,artimatikaAngka2,hasilOperatorAritmatika;

document.getElementById('buttonAritmatika').onclick = function(){
	// input
	aritmatikaAngka1 = document.getElementById('aritmatikaAngka1').value;
	aritmatikaAngka2 = document.getElementById('aritmatikaAngka2').valueAsNumber;
	operatorAritmatika = document.getElementById('operatorAritmatika').value;
	
	// operasi
	hasilOperatorAritmatika = eval(aritmatikaAngka1 + operatorAritmatika + aritmatikaAngka2);
	
	// output
	document.getElementById("hasilOperatorAritmatika").textContent = hasilOperatorAritmatika;

};

let boolean1,boolean2,hasilOperatorLogika,operatorLogika;
document.getElementById('buttonLogika').onclick = function(){
	// input
	boolean1 = document.getElementById('boolean1').value;
	boolean2 = document.getElementById('boolean2').valueAsNumber;
	operatorLogika = document.getElementById('operatorLogika').value;
	
	// operasi
	hasilOperatorLogika = eval(boolean1 + operatorLogika + boolean2);
	
	// output
	document.getElementById("hasilOperatorLogika").textContent = hasilOperatorLogika;

};

let angka1,angka2,hasilOperatorKomparasi,operatorKomparasi;

document.getElementById("buttonKomparasi").onclick = function(){
    angka1 = document.getElementById("angka1").value;
    angka2 = document.getElementById("angka2").value;
    operatorKomparasi = document.getElementById("operatorKomparasi").value;

    hasilOperatorKomparasi = eval(angka1 + operatorKomparasi + angka2);

    document.getElementById("hasilOperatorKomparasi").textContent = hasilOperatorKomparasi;
}