function FarengeytToCelsius(){
    let farengeyt = document.getElementById("celsius").value;
    let celsius   = (farengeyt - 32) * 5/9;
    document.getElementById("celsius").value = celsius;
};
function CelsiusToFarengeyt(){
    let celsius = document.getElementById("celsius").value;
    let farengeyt = (celsius * 9/5) + 32;
    document.getElementById("farengeyt").value = farengeyt;
}