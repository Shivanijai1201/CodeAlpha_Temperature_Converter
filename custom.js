
const convertFahrenheit = () =>{
    var celsius = parseFloat(document.querySelector("#celsius").value);

    var fahrenheitResult = (1.8 * celsius)+32;
    var a = fahrenheitResult.toFixed(2);

    document.querySelector("#celsius").value = celsius;
    document.querySelector("#fahrenheit").value = a;
}

const convertCelsius = () =>{
    var fahrenheit = parseFloat(document.querySelector("#fahrenheit").value);

    var celsiusResult = (fahrenheit - 32)/1.8;
    var b = celsiusResult.toFixed(2);

    document.querySelector("#celsius").value = b;
    document.querySelector("#fahrenheit").value = fahrenheit;
}

const reset = () =>{
    document.querySelector("#celsius").value = " ";
    document.querySelector("#fahrenheit").value = " ";

}