const teksInput = document.querySelector("#input");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");
const angka = document.querySelectorAll(".angka");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");


// button clear
clear.addEventListener("click", function(){
    teksInput.value = "";
});

// button backspace
backspace.addEventListener("click", function(){
    teksInput.value = teksInput.value.slice(0, -1);
});

// button angka
angka.forEach(function(angka){
    angka.addEventListener("click", function(){
        teksInput.value += angka.textContent;
    });
});

// button operator
operator.forEach(function(operator){
    operator.addEventListener("click", function(){
        teksInput.value += operator.textContent;
    });
});

// button sama dengan
equal.addEventListener("click", function(){
    let hasil = teksInput.value;
    teksInput.value = eval(hasil);
})