let  filaString  =  prompt ( "Ingresa el movimiento del caballo iniciado por fila" ) ;
let  columnaString  =  prompt ( "Ingresa la columna" ) ;

let  fila  =  parseInt ( filaString ) ;
let  columna  =  parseInt ( columnaString ) ;
dejar  salida Fila ;
let  salidaCol ;
if ( fila  >  0  &&  fila  <  9  &&  columna  >  0  &&  columna  <  9 ) {
    consola _ log ( "El caballo de ("  +  fila  +  ","  +  columna  + ") puede saltar a:" )

    salida Fila  =  fila  +  2 ;
    salidaCol  =  columna  +  1 ;
    if ( salidaFila  <  9  &&  salidaCol  <  9 ) {
        consola _ log ( salidaFila ,  salidaCol )
    }
    salida Fila  =  fila  +  1 ;
    salidaCol  =  columna  +  2 ;
    if ( salidaFila  <  9  &&  salidaCol  <  9 ) {
        consola _ log ( salidaFila ,  salidaCol )
    }
    salida Fila  =  fila  -  2 ;
    salidaCol  =  columna  -  1 ;
    if ( salidaFila  >  0  &&  salidaCol  >  0 ) {
        consola _ log ( salidaFila ,  salidaCol )
    }
    salida Fila  =  fila  -  1 ;
    salidaCol  =  columna  -  2 ;
    if ( salidaFila  >  0  &&  salidaCol  >  0 ) {
        consola _ log ( salidaFila ,  salidaCol )
    }
    salida Fila  =  fila  +  2 ;
    salidaCol  =  columna  -  1 ;
    if ( salidaFila  <  9  &&  salidaCol  >  0 ) {
        consola _ log ( salidaFila ,  salidaCol )
    }
    salida Fila  =  fila  -  2 ;
    salidaCol  =  columna  +  1 ;
    if ( salidaFila  >  0  &&  salidaCol  <  9 ) {
        consola _ log ( salidaFila ,  salidaCol )
    }
    salida Fila  =  fila  +  1 ;
    salidaCol  =  columna  -  2 ;
    if ( salidaFila  <  9  &&  salidaCol  >  0 ) {
        consola _ log ( salidaFila ,  salidaCol )
    }
    salida Fila  =  fila  -  1 ;
    salidaCol  =  columna  +  2 ;
    if ( salidaFila  >  0  &&  salidaCol  <  9 ) {
        consola _ log ( salidaFila ,  salidaCol )
    }
}
más {
    consola _ log ( "Posicion inválida" )
}