function sumar(){
    let novecientos = parseInt(document.getElementById('900').value || 0)
    document.getElementById('resultado900').innerHTML = novecientos*15  + " KG";
    
    let quinientos = parseInt(document.getElementById('500').value || 0)
    document.getElementById('resultado500').innerHTML = quinientos*8.5 + " KG";

    let docientosCincuenta = parseInt(document.getElementById('250').value || 0)
    document.getElementById('resultado250').innerHTML = docientosCincuenta*5  + " KG";

    
    let resultado900 = parseFloat(document.getElementById('resultado900').innerHTML) || 0;
    let resultado500 = parseFloat(document.getElementById('resultado500').innerHTML) || 0;
    let resultado250 = parseFloat(document.getElementById('resultado250').innerHTML) || 0;

    var totalidad = resultado900+resultado500+resultado250
    document.getElementById('totalidad').innerHTML = totalidad +" KG";
}
