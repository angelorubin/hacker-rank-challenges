# Birthday Cake Candles

Solução em JavaScript para o desafio **Birthday Cake Candles** do HackerRank. O objetivo é contar quantas velas do bolo têm a maior altura.

## Descrição

Você é responsável pelo bolo de aniversário de uma criança. O bolo terá uma vela para cada ano completado. A criança só consegue apagar as velas mais altas. Dado um array com as alturas das velas, retorne quantas delas são as mais altas.

```js
birthdayCakeCandles([3, 2, 1, 3]);
// 2
```

## Como funciona

A função `birthdayCakeCandles(candles)` deve:

- percorrer o array e encontrar a maior altura;
- contar quantas velas possuem essa altura;
- retornar essa contagem.

As duas etapas podem ser feitas em uma única passada pelo array.

## Formato de entrada

- A primeira linha contém o inteiro `n`, o tamanho do array.
- A segunda linha contém `n` inteiros separados por espaço, cada um representando a altura de uma vela.

## Formato de saída

Retorne um inteiro com o número de velas que têm a maior altura.

## Restrições

- `1 <= n <= 10^5`
- `1 <= candles[i] <= 10^7`

## Exemplo

Entrada:

```text
4
3 2 1 3
```

Saída:

```text
2
```

Explicação: as velas têm alturas `3, 2, 1, 3`. As mais altas medem `3` unidades e existem `2` delas, então o resultado é `2`.

## Como executar

É necessário ter o [Node.js](https://nodejs.org/) instalado. Na pasta `birthday-cake-candles`, execute:

```bash
node index.js
```

## Complexidade

- **Tempo:** `O(n)`, com uma única passada pelo array.
- **Espaço adicional:** `O(1)`, além do array de entrada.

## Arquivo da solução

O arquivo [`index.js`](./index.js) deve conter a função `birthdayCakeCandles` implementada.
