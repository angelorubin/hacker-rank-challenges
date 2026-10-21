# Staircase

Solução em JavaScript para o desafio **Staircase** do HackerRank. O objetivo é imprimir uma escada de altura `n`, alinhada à direita, usando `#` e espaços.

## Como funciona

A função `staircase(n)` deve imprimir `n` linhas, em que cada linha contém:

- `n - i` espaços à esquerda;
- `i` caracteres `#` no final;
- a última linha sem espaços à frente.

Exemplo para `n = 6`:

```text
     #
    ##
   ###
  ####
 #####
######
```

Resultado esperado: uma escada com 6 linhas, alinhada à direita.

## Formato da entrada

Um único inteiro `n`, representando a altura da escada.

## Formato da saída

A escada em formato de blocos `#`, alinhada à direita.

## Regras

- A última linha não possui espaços à frente.
- Todas as linhas são alinhadas à direita.
- O número de linhas é igual ao valor de `n`.

## Complexidade

- **Tempo:** `O(n^2)`, porque a saída da escada contém `n` linhas com até `n` caracteres cada uma.
- **Espaço adicional:** `O(1)`, além da saída gerada.

## Arquivo da solução

O arquivo [`index.js`](./index.js) contém o esqueleto da função `staircase`, que deve ser implementada para resolver o desafio.
