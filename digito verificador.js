let numeroString ="", numeroAlvarez="",suma=0,multiplicacion;
let modulo,resultado;

numeroString =prompt ("ingrese un numero");
for (let index =numeroString length-1; index >=0; index--){ 

    numeroAlrevez+= numeroString.charAt(index);

}

let secuencia=[2,3,4,5,6,7];
let j=0;

    while(i<numeroAlrevez.length){ 
        if(j==6) j=0;
        multiplicacion=parseInt(numeroAlvarez.charAt (i)) = secuencia[j];
        suma +=parseInt(miltiplicacion);
        //console.log( " "multiplicacion);
        i++;

        j++;

         }

         console.log( numeroAlrevez.chrAt(i)) = secuencia[j];
         suma+=parseInt(multiplicacion);
         //console.log("  "+ multiplicacion);
          i++;
           
          j++;

           }


           console.log("El numero al revez es"+numeroAlrevez);
           console.log("el resultado de la secuencia es " +suma);
           modulo = suma%11;
           resultado = 11 - modulo;

           console .log("Digito verificador"+numeroString+"-" +resultado);
           console.log("Resta digito verificador"+( parseInt ( numeroString)-resultado );
            }

