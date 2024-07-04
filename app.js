//funcion para encriptar
function encriptar() {
  //Tomará el texto del parrafo "texto"
  let texto = document.getElementById("texto").value;
  //Guarda ese texto en la variable texto encriptado y remplazará las letras
  let textoEncriptado = texto
    //la funcion replace indica una busqueda de la /e/ en el texto que damos
    //g, indica que debe ser una busqueda en toda la cadena de texto
    //si la retiramos solo realiza una busqueda y remplaza la primera que encuentre
    //, i "enter" sera el texto por el que se va a cambiar
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  //pondra el resultado del cambio de letras en el parrafo resultado
  document.getElementById("resultado").innerText = textoEncriptado;
}

//funcnion para desencriptar
function desencriptar() {
  //tomara el texto que este en el parrado texto (caja de texto)
  let texto = document.getElementById("texto").value;
  //guarda el texto que esta en la caja y lo devuelve
  //a como era antes de la encriptaion
  let textoDesencriptado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  //pondra el resultado de esta desencriptación en el parrafo resultado
  document.getElementById("resultado").innerText = textoDesencriptado;
}

//funcion de copiar
function copiar() {
  //tomará el valor del parrafo resultado
  let resultado = document.getElementById("resultado").innerText;
  //la instrucción navigator.clipboard
  //  .writeText(resultado)
  // Utiliza la API del portapapeles
  // para copiar el texto almacenado en "resultado"
  navigator.clipboard
    .writeText(resultado)
    //then es una promesa, por lo que refiere a que
    //cuando se realice saldra un resultado
    //en este caso una alerta
    .then(() => {
      alert("Texto copiado al portapapeles");
    })
    //basicamnete este funciona parecido a un if else
    //si la accion no fue ecitosa se manda otro resultado
    //para esto se ocupa catch
    .catch((error) => {
      console.error("Error al copiar el texto: ", error);
    });
}
