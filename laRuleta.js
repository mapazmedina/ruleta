let jugada = 0;
function roll(){
    const total = (Math.floor(Math.random()*185))+185;// 37*5=185
    const Numcaido = total%37;
    jugadas+=1
    console.log(jugada,":", total, "CaidoEnNnumero", Numcaido)
}
for(let i=0; i<10; i++){
    roll();
}