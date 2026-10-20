# A Very Big Sum

Solução em JavaScript para o desafio **A Very Big Sum** do HackerRank. O objetivo é somar os valores de um array de inteiros, que podem ser maiores do que o limite de um inteiro de 32 bits.

## Descrição

Implemente a função `aVeryBigSum(ar)`, que recebe um array de inteiros e retorna a soma de seus elementos.

```js
aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
// 5000000015
```

## Formato de entrada

- A primeira linha contém o tamanho `n` do array.
- A segunda linha contém `n` inteiros separados por espaços.

## Formato de saída

Retorne a soma de todos os elementos do array.

## Restrições

- `1 <= n <= 10`
- `0 <= ar[i] <= 10^10`

## Estratégia e complexidade

Percorra o array uma vez, adicionando cada valor a um acumulador. A função usa **O(n)** tempo e **O(1)** espaço adicional.

Em JavaScript, o tipo `Number` representa inteiros exatamente até `2^53 - 1`. Com as restrições deste desafio, a soma máxima é `10 × 10^10`, abaixo desse limite.

## Arquivo da solução

O arquivo [`index.js`](./index.js) contém o esqueleto da função `aVeryBigSum`, que deve ser completada para resolver o desafio.
