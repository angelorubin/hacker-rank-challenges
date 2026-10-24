# Time Conversion

Solução em JavaScript para o desafio **Time Conversion** do HackerRank. O objetivo é converter um horário no formato AM/PM (12 horas) para o formato militar (24 horas).

## Descrição

Dado um horário no formato `hh:mm:ssAM` ou `hh:mm:ssPM`, retorne o mesmo horário no formato de 24 horas.

```js
timeConversion('12:01:00PM');
// '12:01:00'

timeConversion('12:01:00AM');
// '00:01:00'
```

## Como funciona

A função `timeConversion(s)` deve:

- separar as horas, os minutos e os segundos da string;
- identificar o sufixo `AM` ou `PM`;
- ajustar a hora conforme o período:
  - `12AM` corresponde à hora `00`;
  - `12PM` permanece `12`;
  - `PM` soma 12 às horas de `01` a `11`;
  - `AM` mantém as horas de `01` a `11` inalteradas;
- montar e retornar a string no formato `hh:mm:ss`, sem o sufixo.

Os minutos e os segundos não são alterados.

## Formato de entrada

Uma única string `s` representando um horário válido no formato de 12 horas (`hh:mm:ssAM` ou `hh:mm:ssPM`).

## Formato de saída

Retorne uma string com o horário equivalente no formato de 24 horas (`hh:mm:ss`).

## Restrições

- Todos os horários de entrada são válidos.
- A entrada sempre inclui o sufixo `AM` ou `PM` em maiúsculas.

## Exemplo

Entrada:

```text
07:05:45PM
```

Saída:

```text
19:05:45
```

Explicação: `07:05:45PM` corresponde a `19:05:45` no relógio de 24 horas, pois `7 + 12 = 19`.

## Como executar

É necessário ter o [Node.js](https://nodejs.org/) instalado. Na pasta `time-conversion`, execute:

```bash
node index.js
```

## Complexidade

- **Tempo:** `O(1)`, pois a string de entrada tem tamanho fixo.
- **Espaço adicional:** `O(1)`.

## Arquivo da solução

O arquivo [`index.js`](./index.js) contém o esqueleto da função `timeConversion`, que deve ser implementada para resolver o desafio.
