let num,tamano,mayor=0;
let primerNumero=false;
tamano  = promt (" Ingresa el el tamano (n)");
console.log("tamaño n "+ tamano);
for (let index = 0; < tamano; index ++){ 
     num = parseFloat (promt("ingresa un numero"));
     if (! primerNumero) { 

        mayor =num;
        primerNumero=true;

         }
          
         if(num>mayor){ 
             mayor=num;
              
              }
              console.log("Numero ingresado" + num);
               }
                
               console.log8("Numero mayor es" + mayor);
                }