let curso = 'ciencias da computação';
if (curso === 'engenharia') {
    console.log('O curso é engenharia');
} else {
    console.log('O curso não é engenharia e sim ' + curso);
}

for (let m= 0; m < 5; m++) {
    console.log('o número é ' + m);
}

let cor = 'vermelho';
if (cor === 'vermelho') {
    console.log('A cor é vermelho');
} else if (cor === 'azul') {
    console.log('A cor é azul');
}

let contador = 0;
while (true) { // Laço infinito proposital
    console.log("Contagem: " + contador);
    
    if (contador >= 5) {
        break; // Sai do laço quando o contador chega a 5
    }
    contador++;
}