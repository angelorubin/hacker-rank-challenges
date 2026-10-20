# Compare the Triplets

Desafio do HackerRank implementado como exercício de lógica com JavaScript. Alice e Bob recebem uma nota em três categorias: clareza, originalidade e dificuldade. O objetivo é comparar as notas de cada categoria e contar quantos pontos cada pessoa recebe.

## Regras de pontuação

Compare os valores de Alice e Bob na mesma posição:

- Se `a[i] > b[i]`, Alice recebe 1 ponto.
- Se `a[i] < b[i]`, Bob recebe 1 ponto.
- Se `a[i] === b[i]`, ninguém recebe ponto.

O resultado deve ser um array com a pontuação de Alice primeiro e a de Bob em seguida: `[pontosAlice, pontosBob]`.

## Exemplo

```text
Alice: [5, 6, 7]
Bob:   [3, 6, 10]
```

Comparando as notas:

1. `5 > 3`: Alice recebe 1 ponto.
2. `6 === 6`: ninguém recebe ponto.
3. `7 < 10`: Bob recebe 1 ponto.

Resultado: `[1, 1]`.

## Implementação em JavaScript

```js
function compareTriplets(a, b) {
  let pontosAlice = 0;
  let pontosBob = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      pontosAlice++;
    } else if (a[i] < b[i]) {
      pontosBob++;
    }
  }

  return [pontosAlice, pontosBob];
}
```

## Formato de entrada do HackerRank

A entrada contém duas linhas, cada uma com três números inteiros separados por espaços:

```text
5 6 7
3 6 10
```

## Formato de saída

Imprima dois inteiros separados por espaço: primeiro a pontuação de Alice e depois a de Bob.

```text
1 1
```

## Restrições

- Cada triplete contém exatamente três valores.
- `1 ≤ a[i] ≤ 100`
- `1 ≤ b[i] ≤ 100`

## Complexidade

- **Tempo:** `O(1)`, pois são comparadas sempre três posições.
- **Espaço adicional:** `O(1)`.
