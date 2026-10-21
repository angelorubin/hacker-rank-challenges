# Mini Max Sum

Solução em JavaScript para o desafio **Mini Max Sum** do HackerRank. O objetivo é calcular a menor e a maior soma possível usando exatamente quatro dos cinco inteiros informados.

## Como funciona

A função `miniMaxSum(arr)` recebe um array com cinco números inteiros. Para encontrar os valores desejados:

- ordena os valores;
- soma os quatro menores para obter o mínimo;
- soma os quatro maiores para obter o máximo;
- imprime os dois resultados em uma linha, separados por espaço.

Exemplo com `arr = [1, 2, 3, 4, 5]`:

- menor soma: `1 + 2 + 3 + 4 = 10`
- maior soma: `2 + 3 + 4 + 5 = 14`

Saída esperada:

```text
10 14
```

## Como executar

É necessário ter o [Node.js](https://nodejs.org/) instalado. Na pasta `min-max-sum`, execute:

```bash
node index.js
```

## Complexidade

- **Tempo:** `O(n log n)`, porque a solução normalmente ordena o array antes de somar.
- **Espaço adicional:** `O(1)`, além do array original.

## Arquivo da solução

O arquivo [`index.js`](./index.js) contém o esqueleto da função `miniMaxSum`, que deve ser implementada para resolver o desafio.
