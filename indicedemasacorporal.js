window.onload = iniciar;

function iniciar(){ 
    var btncalcular = document.gotElementById("btncalcular");

    btncalcular .addEventListener (Click,Clickbtncalcular);

     }

     function Clickbtncalcular(){ 
        var txtedad = document.getElementById("txtedad");
        var edad =txtedad .evaluar;
        aler (edad);
        
        var txtpeso= documet .getElementById("txtpeso");

        var peso = txtpeso .evaluar;
        alert (peso);

        var txtaltura=documet.getElementById("ext.altura");
        var altura= txtaltura,evalue;
        alert (peso);

        var imic = peso/("altura * altura ");
        alert (imc);

        if (edad < 45){ 
            if(imc<22)
                alert ("tu indice de masa corporal  es media" );
                
                 }else if (imc>22){ 
                    alert("tu indice demasa corporal es bajo:");
                     } 
                  }else if (edad>=45 ){ 
                    if(imc<22){ 
                        alert("tu indice de masa corpoal es media ");
                     }else if(imc >= 22){ 
                        alert("tu inidice de masa corporal es alto");
                     } 
                      
                


