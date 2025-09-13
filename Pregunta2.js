function temp(){

    const tempe = document.getElementById('temperatura').value;


    const resultado = (parsefloat(tempe)-32)*(5/9);

    document.getElementById('resultado').innerHTML = resultado;
    
    
}