# Grading Students

Solução em JavaScript para o desafio **Grading Students** do HackerRank. O objetivo é automatizar o arredondamento das notas dos alunos da HackerLand University.

## Descrição

A universidade segue a seguinte política de notas:

- Cada aluno recebe uma nota (`grade`) no intervalo inclusivo de `0` a `100`.
- Qualquer nota menor que `40` é considerada reprovação.

A professora Sam arredonda cada nota de acordo com estas regras:

1. Se a diferença entre a nota e o próximo múltiplo de `5` for menor que `3`, arredonde a nota para o próximo múltiplo de `5`.
2. Se a nota for menor que `38`, nenhum arredondamento ocorre, pois o resultado continuaria sendo reprovação.

Exemplos das regras:

- `84` é arredondado para `85` (`85 - 84 = 1`, menor que `3`).
- `29` não é arredondado (o resultado seria menor que `40`).
- `57` não é arredondado (`60 - 57 = 3`, que não é menor que `3`).

## Como funciona

A função `gradingStudents(grades)` deve percorrer a lista de notas e, para cada uma:

- ignorar o arredondamento quando `grade < 38`;
- calcular o próximo múltiplo de `5` (usando `Math.ceil(grade / 5) * 5`);
- arredondar apenas se a diferença para esse múltiplo for menor que `3`;
- manter a nota original nos demais casos.

```js
function gradingStudents(grades) {
  return grades.map((grade) => {
    if (grade < 38) return grade;

    const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
    const difference = nextMultipleOf5 - grade;

    return difference < 3 ? nextMultipleOf5 : grade;
  });
}
```

## Formato de entrada

- A primeira linha contém um inteiro `n`, o número de alunos.
- As `n` linhas seguintes contêm, cada uma, um inteiro `grades[i]` com a nota antes do arredondamento.

## Formato de saída

Retorne um array de inteiros com as notas após o arredondamento, na mesma ordem da entrada.

## Restrições

- `1 <= n <= 60`
- `0 <= grades[i] <= 100`

## Exemplo

Entrada:

```text
4
73
67
38
33
```

Saída:

```text
75
67
40
33
```

Explicação:

- `73`: o próximo múltiplo de `5` é `75` e `75 - 73 = 2 < 3`, então a nota é arredondada para `75`.
- `67`: o próximo múltiplo de `5` é `70` e `70 - 67 = 3`, que não é menor que `3`, então a nota permanece `67`.
- `38`: o próximo múltiplo de `5` é `40` e `40 - 38 = 2 < 3`, então a nota é arredondada para `40`.
- `33`: a nota é menor que `38`, então não há arredondamento e permanece `33`.

## Complexidade

- **Tempo:** `O(n)`, pois cada nota é processada uma única vez.
- **Espaço adicional:** `O(n)`, devido ao array retornado por `map`.

## Arquivo da solução

O arquivo [`index.js`](./index.js) deve conter a implementação da função `gradingStudents` e um array de exemplo para teste.
