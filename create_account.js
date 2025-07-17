function check_edad() {
    const inputFecha = new Date(document.getElementById("fecha_nacimiento").value);
    const fechaHoy = new Date();
    const edad = fechaHoy.getFullYear() - inputFecha.getFullYear();
    let error;

    // Vamos a hacer las diferentes pruebas
    if (isNaN(edad) || edad < 18){
        error = false;
        document.getElementById("fecha_nacimiento").style.color = "red"; 
    } else {
        error = true;
        document.getElementById("fecha_nacimiento").style.color = "green"; 
    }
}

function generate_password() {
    let length = 16,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    
  document.getElementById("contrasena_usuario").value = retVal;
};
