function creanumero (min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}


function controllopariDispari(numero){
    let ritorno;
    if(numero % 2 == 0){
        ritorno= "PARI";
    }else{
        ritorno= "DISPARI";
    }

    return ritorno;
}
function checkPariDispari(numero) {

    let ritorno;

    if (numero % 2 == 0) {
        ritorno = "PARI";
    } else {
        ritorno = "DISPARI";
    }

    return ritorno;

}

let pariDispari =prompt('scegli pari o dispari') .toUpperCase();


if(pariDispari == "PARI" || pariDispari == "DISPARI"){
    let numeroUser =parseInt(prompt('inserisci un numero tra 1 e 5'));

    if(numeroUser>=1 && numeroUser<=5 && !isNaN(numeroUser)){

        let numeroPc= creanumero(1,5);
        console.log('il numero del pc è: ' + numeroPc)
        console.log('il numero del user è: ' + numeroUser)
        let somma = numeroUser + numeroPc;
        let verificaSomma= controllopariDispari(somma);
        if (verificaSomma==pariDispari){
            alert('HAI VINTO')
        }else{
            alert('HA VINTO IL COMPUTER')
        }
    }else{
        alert('il valore inserito non è valido')
    }



}else{
    alert('il valore inserito non è valido')
}
