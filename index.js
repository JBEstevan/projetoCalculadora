const prompt = require("prompt-sync")()

function menu() {
    let numero1 = Number(prompt('Olá digite o primeiro número: '));
    let numero2 = Number(prompt('Agora digite o segundo número: '));
    let resultado;
    if (isNaN(numero1) || isNaN(numero2)) {
        console.log('Por favor digite somente números.');
        process.exit()
    } else { console.log(`----- Seleção de Operação -----
    Digite:
    (1) para somar
    (2) para subtrair
    (3) para multiplicar
    (4) para dividir
    (5) para calcular a porcentagem`)
        let opcao = prompt()
        switch (opcao) {
            case '1':
                resultado = (numero1 + numero2);
                break;
            case '2':
                resultado = (numero1 - numero2);
                break;
            case '3':
                resultado = (numero1 * numero2);
                break;
            case '4':
                resultado = (numero1 / numero2);
                    if (numero2 == 0){
                        console.log("Não é possível dividir por zero!")
                        process.exit();
                    } else {
                        resultado = (numero1 / numero2);
                    break;
                    }
            case "5":
                resultado = (numero1 * numero2) / 100;
                break;
                default:
                resultado = "Por favor, escolha uma das 5 operações matemáticas."
                break;
        }
    }

    console.log(`O resultado de sua operação é: ${resultado}.`);
}

menu()