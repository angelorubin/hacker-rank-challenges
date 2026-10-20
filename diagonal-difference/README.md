# Diagonal Difference

Solução em JavaScript para o desafio **Diagonal Difference** do HackerRank. O objetivo é calcular a diferença absoluta entre a soma dos elementos da diagonal principal e da diagonal secundária de uma matriz quadrada.

## Como funciona

Dada uma matriz quadrada, a função `diagonalDifference(arr)` soma os elementos:

- da diagonal principal: `arr[i][i]`
- da diagonal secundária: `arr[i][n - 1 - i]`

Em seguida, retorna o valor absoluto da diferença:

```js
Math.abs(somaDiagonalPrincipal - somaDiagonalSecundaria)
```

### Exemplo

```js
const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
```

- Diagonal principal: `11 + 5 + (-12) = 4`
- Diagonal secundária: `4 + 5 + 10 = 19`
- Diferença absoluta: `|4 - 19| = 15`

## Como executar

É necessário ter o [Node.js](https://nodejs.org/) instalado. Na pasta `diagonal-diference`, execute:

```bash
node index.js
```

A saída esperada para o exemplo configurado no arquivo é:

```text
15
```

## Complexidade

- **Tempo:** `O(n)` para uma matriz `n x n`, pois cada elemento da diagonal é visitado uma vez.
- **Espaço adicional:** `O(1)`, porque apenas algumas variáveis auxiliares são usadas.

## Arquivo principal

O arquivo [`index.js`](./index.js) contém a implementação da função e um exemplo de matriz para teste.
