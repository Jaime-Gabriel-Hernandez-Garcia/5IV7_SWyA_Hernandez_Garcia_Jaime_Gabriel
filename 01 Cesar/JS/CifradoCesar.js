var cesar = cesar || (function(){
    var proceso = function(txt, desp, action){
        var replace = (function(){
            //primero necesito tener la matriz del alfabeto
            //hay que recorrar que el cifrado lo hace caracter por caracter
            var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                    'm', 'n', 'ñ' ,'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 
                        'x', 'y', 'z'];
            var l = abc.length;
  
            //necesitamos obtener la posicion que va  a venir por parte 
            //de la llave privada

            return function(c){
                //vamos a saber la posicion
                var i = abc.indexOf(c.toLowerCase());
                //necesitamos saber es donde estamos adentro de la matriz
                //como la vamos a recorrer y que pasa cuando llegue
                //al final?
                //alert(c);
                //alert(i);

                if(i != -1){
                    //primero obtenemos la posicion para el desp
                    var pos = i;
                    //que voy a hacer cifrar o descifrar
                    if(action){
                        //cifrar para adelante
                        pos += desp;
                        //como se va a mover
                        pos -= (pos >= l)?l:0;
                    }else{
                        //descifrar para atras
                        pos -= desp;
                        //movimiento
                        pos += (pos < 0)?l:0;
                    }
                    return abc[pos];

                }
                return c;
            };
        })();
        //tenemos que saber que el texto este acorde al abc
        
        var re = (/([a-z])/ig);
        
        //una funcion que se encargue del intercambio

        return String(txt).replace(re, function(match){
            return replace(match);
        });
        
    };

    return{
        encode : function(txt, desp){
            return proceso(txt, desp, true);
        },

        decode : function(txt, desp){
            return proceso(txt, desp, false);
        }
    };
})();

//funcion de cifrado



function cifrar(){

    if((document.getElementById("operacion").value) == "1mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 1);
    }


    if((document.getElementById("operacion").value) == "2mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 2);
    }


    if((document.getElementById("operacion").value) == "3mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 3);
    }


    if((document.getElementById("operacion").value) == "4mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 4);
    }


    if((document.getElementById("operacion").value) == "5mod27"){
    document.getElementById("resultado").innerHTML =
    cesar.encode(document.getElementById("cadena").value, 5);
    }


    if((document.getElementById("operacion").value) == "6mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 6);
    }


    if((document.getElementById("operacion").value) == "7mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 7);
    }


    if((document.getElementById("operacion").value) == "8mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 8);
    }


    if((document.getElementById("operacion").value) == "9mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 9);
    }


    if((document.getElementById("operacion").value) == "10mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 10);
    }

    
    if((document.getElementById("operacion").value) == "11mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 11);
    }


    if((document.getElementById("operacion").value) == "12mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 12);
    }


    if((document.getElementById("operacion").value) == "13mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 13);
    }


    if((document.getElementById("operacion").value) == "14mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 14);
    }


    if((document.getElementById("operacion").value) == "15mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 15);
    }


    if((document.getElementById("operacion").value) == "16mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 16);
    }


    if((document.getElementById("operacion").value) == "17mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 17);
    }


    if((document.getElementById("operacion").value) == "18mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 18);
    }

    
    if((document.getElementById("operacion").value) == "19mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 19);
    }


    if((document.getElementById("operacion").value) == "20mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 20);
    }


    if((document.getElementById("operacion").value) == "21mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 21);
    }


    if((document.getElementById("operacion").value) == "22mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 22);
    }


    if((document.getElementById("operacion").value) == "23mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 23);
    }


    if((document.getElementById("operacion").value) == "24mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 24);
    }


    if((document.getElementById("operacion").value) == "25mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 25);
    }


    if((document.getElementById("operacion").value) == "26mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 26);
    }


    if((document.getElementById("operacion").value) == "27mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 27);
    }


}

//funcion de descifrado

function descifrar(){

    if((document.getElementById("operacion").value) == "1mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, 1);
    }


    if((document.getElementById("operacion").value) == "2mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, 2);
    }


    if((document.getElementById("operacion").value) == "3mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, 3);
    }


    if((document.getElementById("operacion").value) == "4mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, 4);
    }


    if((document.getElementById("operacion").value) == "5mod27"){
    document.getElementById("resultado").innerHTML =
    cesar.decode(document.getElementById("cadena").value, 5);
    }


    if((document.getElementById("operacion").value) == "6mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, 6);
    }


    if((document.getElementById("operacion").value) == "7mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, 7);
    }


    if((document.getElementById("operacion").value) == "8mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, 8);
    }


    if((document.getElementById("operacion").value) == "9mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, 9);
    }


    if((document.getElementById("operacion").value) == "10mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, 10);
    }

    
    if((document.getElementById("operacion").value) == "11mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, 11);
    }


    if((document.getElementById("operacion").value) == "12mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, 12);
    }


    if((document.getElementById("operacion").value) == "13mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, 13);
    }


    if((document.getElementById("operacion").value) == "14mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, 14);
    }


    if((document.getElementById("operacion").value) == "15mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, 15);
    }


    if((document.getElementById("operacion").value) == "16mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, 16);
    }


    if((document.getElementById("operacion").value) == "17mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, 17);
    }


    if((document.getElementById("operacion").value) == "18mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, 18);
    }

    
    if((document.getElementById("operacion").value) == "19mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, 19);
    }


    if((document.getElementById("operacion").value) == "20mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, 20);
    }


    if((document.getElementById("operacion").value) == "21mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, 21);
    }


    if((document.getElementById("operacion").value) == "22mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, 22);
    }


    if((document.getElementById("operacion").value) == "23mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, 23);
    }


    if((document.getElementById("operacion").value) == "24mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, 24);
    }


    if((document.getElementById("operacion").value) == "25mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, 25);
    }


    if((document.getElementById("operacion").value) == "26mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, 26);
    }


    if((document.getElementById("operacion").value) == "27mod27"){
        document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, 27);
    }


}