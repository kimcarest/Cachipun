alert('BIENVENIDO A CACHIPUN');

const vecesQuieresJugar = prompt('¿Cuantas veces quieres jugar?');

var empateJ = 0; 
var ganadoJ = 0;
var perdidoJ = 0;

var pcJ;

    for (var i = 0; i < vecesQuieresJugar; i++) {

        var usuarioJ = prompt('Escoge: PIEDRA, PAPEL O TIJERA')
        
        var numeroAzar = Math.floor(Math.random() * 3);
        if (numeroAzar === 0) {
            pcJ = 'PIEDRA';
        } else if (numeroAzar === 1) {
            pcJ = 'PAPEL';
        } else if (numeroAzar === 2) {
            pcJ = 'TIJERA';
        }

if (usuarioJ === pcJ) {
    empateJ += 1;
    alert('EMPATE');
} else if (usuarioJ === 'PIEDRA') {
    if (pcJ === 'PAPEL') {
        perdidoJ += 1;
        alert('Pc gana');
    } else {
        ganadoJ += 1;
        alert('Ganaste');
    } 
    
} else if (usuarioJ === 'PAPEL') {
    if (pcJ === 'TIJERA') {
        perdidoJ += 1;
        alert('Pc gana');
    } else {
        ganadoJ += 1;
        alert('Ganaste');
    }

} else if (usuarioJ === 'TIJERA') {
    if (pcJ === 'PIEDRA') {
        perdidoJ += 1;
        alert('Pc gana');
    } else {
        ganadoJ += 1;
        alert('Ganaste');
    }
}
    }
    alert (`Ganaste ${ganadoJ} veces, Perdiste ${perdidoJ} veces, y Empataste ${empateJ} veces.`);

    if (ganadoJ > perdidoJ) {
        alert("Felicitaciones, Ganaste");
    } else if (ganadoJ < perdidoJ) {
        alert("Lamentablemente, Perdiste");
    } else if (ganadoJ === perdidoJ) {
        alert("Ha sido un gran empate");
    }