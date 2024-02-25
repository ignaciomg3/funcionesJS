function mostrarSaludo(nombre, apellido) {
    // Concatenar el nombre y el apellido para formar el saludo
    var saludo = "¡Hola, " + nombre + " " + apellido + "!";

    // Mostrar el saludo por consola o en la página web
    console.log(saludo);

    // Si estás trabajando en un entorno web, puedes mostrarlo en la página
    // descomentando la siguiente línea:
    // document.getElementById('resultado').innerHTML = saludo;
}

// Ejemplo de uso de la función modificada
mostrarSaludo("Igna", "Pérez");
