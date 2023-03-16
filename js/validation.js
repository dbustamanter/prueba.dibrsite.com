var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var telefono = document.getElementById('telefono');
var error = document.getElementById('error');
var errorNextPage = [];
var mensajeError = [];
var form = document.getElementById('formulario');
error.style.color="red";

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    validarCampo('nombre',nombre);
    validarCampo('email',email);
    validarCampo('telefono',telefono);
    redireccionIndex(errorNextPage);
    error.innerHTML = mensajeError.join(', ');
});

function clearCampos(){
    document.getElementById("errorNombre").innerHTML=null;
    document.getElementById("errorEmail").innerHTML=null;
    document.getElementById("errorTelefono").innerHTML=null;
}

function validarCampo (campo,texto){
    switch(campo){
        case "nombre":
            if (texto.value===null || texto.value==''){
                document.getElementById(campo).style.bordercolor = "red";
                document.getElementById("errorNombre").innerHTML = "Campo Obligatorio";
                mensajeError.push('Ingresar Nombre');
                errorNextPage.push('errorNombre');
            }
            break;
        case "email":
            if (texto.value===null || texto.value==''){
                document.getElementById(campo).style.bordercolor = "red";
                document.getElementById("errorEmail").innerHTML = "Campo Obligatorio";
                mensajeError.push('Ingresar Email');
                errorNextPage.push("errorEmail");
            }
            break;
        case "telefono":
            if (texto.value===null || texto.value==''){
                document.getElementById(campo).style.bordercolor = "red";
                document.getElementById("errorTelefono").innerHTML = "Campo Obligatorio";
                mensajeError.push('Ingresar Telefono')
                errorNextPage.push('errorTelefono');
            }
            break;
    }
}

function redireccionIndex(){
    if(errorNextPage.length == 0){
        clearCampos();
        window.alert("Datos ingresados correctamente");
        errorNextPage = [];
    }
}