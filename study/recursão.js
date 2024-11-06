/*
//Utilização com for
// Esta é a declaração da função. Ela recebe um parâmetro: 'n', que é o número de termos da sequência de Fibonacci que queremos.
function fibonacci(n) {
    // Aqui estamos inicializando a sequência de Fibonacci com seus dois primeiros termos, 0 e 1.
    const sequence = [0, 1]; 

    // Este é um loop que começa no terceiro termo (índice 2) e vai até o n-ésimo termo.
    for (let i = 2; i < n; i++) {
        // Aqui estamos calculando o próximo número na sequência de Fibonacci, que é a soma dos dois números anteriores na sequência.
        const nextNumber = sequence[i - 1] + sequence[i - 2];

        // Aqui estamos adicionando o próximo número ao final da sequência.
        sequence.push(nextNumber);
    }

    // Aqui estamos retornando a sequência de Fibonacci completa.
    return sequence;
}

// Aqui estamos definindo 'n' como 10, que é a quantidade de termos da sequência de Fibonacci que queremos gerar.
const n = 10; 

// Aqui estamos chamando a função 'fibonacci' com 'n' e armazenando o resultado na variável 'result'.
const result = fibonacci(n);

// Aqui estamos imprimindo o resultado no console. O resultado será os primeiros 10 termos da sequência de Fibonacci.
console.log(result); 

///============================================================
///============================================================
///============================================================
///============================================================








// Esta é a declaração da função. Ela recebe dois parâmetros: 'n', que é o número de termos da sequência de Fibonacci que queremos, e 'fibArray', que é um array com os dois primeiros termos da sequência de Fibonacci. Se 'fibArray' não for fornecido quando a função for chamada, ele será definido como [0, 1] por padrão.
function fibonacciRecursive(n, fibArray = [0, 1]) {

    // Esta é uma condição de parada para a recursão. Se 'n' for 1 ou menos, a função retorna 'fibArray', que contém a sequência de Fibonacci até o n-ésimo termo.
    if (n <= 1) {
      return fibArray; // Retorna a sequência completa até o n-ésimo termo
    }

    // Esta linha calcula o próximo número na sequência de Fibonacci, que é a soma dos dois últimos números no 'fibArray'.
    const nextNumber = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];

    // Esta linha adiciona o 'nextNumber' ao final do 'fibArray'.
    fibArray.push(nextNumber);

    // Esta é a chamada recursiva da função. Ela chama a si mesma, mas com 'n' diminuído em 1 e o 'fibArray' atualizado.
    return fibonacciRecursive(n - 1, fibArray);
}

// Esta linha chama a função 'fibonacciRecursive' com 'n' igual a 10 e imprime o resultado no console. O resultado será os primeiros 10 termos da sequência de Fibonacci.
console.log(fibonacciRecursive(10));

*/



