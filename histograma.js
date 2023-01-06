let  datoIngresado ;
let  contadorPositivos = 0 ;
let  contador Negativos = 0 ;

hacer {
    datoIngresado  =  prompt ( "Ingresa un valor entereo positivo o negativo, termina con 0" ) ;
    consola _ log ( datoIngresado ) ;
    if ( datoIngresado  >  0 ) {
        contadorPositivos ++ ;
    } else  if ( datoIngresado < 0 ) {
        contador Negativos ++ ;
    }
} while ( datoIngresado  != 0 )
let  renglon = "Positivos:" ;
for ( sea  i = 0 ; i < contadorPositivos ; i ++ ) {
    renglón += "*" ;
}
consola _ registro ( renglón ) ;

renglón = "Negativos:" ;
for ( sea  i = 0 ; i < contadorNegativos ; i ++ ) {
    renglón += "*" ;
}
consola _ registro ( renglón ) ;
IL - 3011221200151595