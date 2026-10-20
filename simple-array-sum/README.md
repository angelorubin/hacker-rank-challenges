# Simple Array Sum

Solução em JavaScript para o desafio **Simple Array Sum** do HackerRank. O objetivo é somar todos os números de um array de inteiros e retornar o resultado.

## Como funciona

A função `simpleArraySum(ar)` percorre o array uma vez, acumula cada elemento em uma variável e retorna a soma. Para um array vazio, retorna `0`.

```js
simpleArraySum([1, 2, 3, 4, 10, 11]); // 31
```

O arquivo [`index.js`](./index.js) inclui um array de exemplo (`[1, 5, 10, 7]`) e imprime sua soma no console.

## Como executar

É necessário ter o [Node.js](https://nodejs.org/) instalado. Na pasta `simple-array-sum`, execute:

```bash
node index.js
```

Saída esperada:

```text
23
```

## Complexidade

- **Tempo:** `O(n)`, em que `n` é a quantidade de elementos do array.
- **Espaço adicional:** `O(1)`, pois a soma é acumulada em uma única variável.
