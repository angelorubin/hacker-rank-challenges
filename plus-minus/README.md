# Plus Minus

Solução em JavaScript para o desafio **Plus Minus** do HackerRank. O objetivo é calcular a proporção de números positivos, negativos e zeros em um array de inteiros, imprimindo cada fração com 6 casas decimais.

## Como funciona

A função `plusMinus(arr)` percorre o array uma única vez, contando quantos elementos são positivos, negativos e zero. Em seguida, divide cada contagem pelo tamanho total do array e imprime o resultado com 6 casas decimais, um valor por linha:

```js
function plusMinus(arr) {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveCount++;
    } else if (arr[i] < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  }

  console.log((positiveCount / arr.length).toFixed(6));
  console.log((negativeCount / arr.length).toFixed(6));
  console.log((zeroCount / arr.length).toFixed(6));
}
```

A ordem da saída é sempre: proporção de positivos, de negativos e de zeros.

### Exemplo

O array de exemplo do arquivo é `arr = [1, 1, 0, -1, -1]`:

- Positivos: `1`, `1` → `2 / 5 = 0.400000`
- Negativos: `-1`, `-1` → `2 / 5 = 0.400000`
- Zeros: `0` → `1 / 5 = 0.200000`

Saída esperada:

```text
0.400000
0.400000
0.200000
```

## Como executar

É necessário ter o [Node.js](https://nodejs.org/) instalado. Na pasta `plus-minus`, execute:

```bash
node index.js
```

A saída esperada para o exemplo configurado no arquivo é:

```text
0.400000
0.400000
0.200000
```

## Restrições

- `1 <= n <= 100`
- `-100 <= arr[i] <= 100`

## Complexidade

- **Tempo:** `O(n)`, pois cada elemento do array é visitado uma vez.
- **Espaço adicional:** `O(1)`, pois apenas três contadores e o total são mantidos em memória.

## Arquivo da solução

O arquivo [`index.js`](./index.js) contém a implementação da função `plusMinus` e um array de exemplo para teste.
