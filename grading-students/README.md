# Grading Students

Desafio **Grading Students** do HackerRank, resolvido em JavaScript. O objetivo é automatizar o arredondamento das notas dos alunos da HackerLand University.

## Descrição

A Universidade HackerLand possui a seguinte política de notas:

- Cada aluno recebe uma nota (`grade`) no intervalo de `0` a `100`.
- Qualquer nota inferior a `40` é considerada reprovação.

Sam é professor na universidade e gosta de arredondar a nota de cada aluno seguindo estas regras:

1. Se a diferença entre a nota e o próximo múltiplo de `5` for menor que `3`, a nota é arredondada para cima, para esse próximo múltiplo de `5`.
2. Se a nota for inferior a `38`, nenhum arredondamento é feito, pois o resultado ainda seria uma nota de reprovação.

Exemplos das regras:

- `84` é arredondado para `85` (`85 - 84 = 1`, menor que `3`).
- `33` não é arredondado (o resultado seria inferior a `38`).
- `57` não é arredondado (`60 - 57 = 3`, que não é menor que `3`).

## Descrição da função

Complete a função `gradingStudents` com o seguinte parâmetro:

- `grades`: um array de inteiros com as notas antes do arredondamento.

**Retorno:** um array de inteiros com as notas após o arredondamento.

## Formato de entrada

- A primeira linha contém um inteiro `n`, o número de alunos.
- Cada uma das `n` linhas seguintes contém um inteiro `grades[i]`, a nota de um aluno.

## Formato de saída

Retorne um array com as notas finais, na mesma ordem da entrada.

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

- O aluno recebeu `73` e o próximo múltiplo de `5` é `75`. Como `75 - 73 < 3`, a nota é arredondada para `75`.
- O aluno recebeu `67` e o próximo múltiplo de `5` é `70`. Como `70 - 67 = 3`, a nota permanece `67`.
- O aluno recebeu `38` e o próximo múltiplo de `5` é `40`. Como `40 - 38 < 3`, a nota é arredondada para `40`.
- O aluno recebeu `33`, que é inferior a `38`, então a nota permanece `33`.

## Como executar

É necessário ter o [Node.js](https://nodejs.org/) instalado. Na pasta `grading-students`, execute:

```bash
node index.js
```

## Arquivo da solução

O arquivo [`index.js`](./index.js) deve conter a função `gradingStudents` implementada.
