var count = 0;

document.getElementById("button_tambah").onclick = function(){
    count+=1;
    console.log(count);
    document.getElementById("count").textContent = count;
}

document.getElementById("button_kurang").onclick = function(){
    count-=1;
    console.log(count);
    document.getElementById("count").textContent = count;
}