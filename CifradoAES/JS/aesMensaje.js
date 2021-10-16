function abrirArchivo(evento){
    let archivo = evento.target.files[0];

    if (archivo){
        let reader = new FileReader();
        

        reader.onload = function(e) {
            let contenido = e.target.result;

            var pass = document.getElementById("pass").value;

            if(!pass){
                alert("ingresa la clave");
                return;
            }

            
            var cifrado = CryptoJS.AES.encrypt(contenido, pass);
            var descifrado = CryptoJS.AES.decrypt(cifrado, pass);

            //document.getElementById('contenido').innerText = descifrado.toString(CryptoJS.enc.Utf8);
            document.getElementById('contenido').innerText = cifrado;
        };

        reader.readAsText(archivo);
    } else {
        document.getElementById('mensajes').innerText = 'No se ha seleccionado un archivo.';
    }

    
}

window.addEventListener('load', () => {
    document.getElementById('archivoTexto').addEventListener('change', abrirArchivo);
});