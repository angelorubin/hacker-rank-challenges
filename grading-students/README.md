# Grading Students (Politica de Notas da HackerLand)

A **HackerLand University** possui a seguinte política de notas:

- Cada estudante recebe uma nota (`grade`) no intervalo inclusivo de $0$ a $100$.
- Qualquer nota menor que $40$ é uma nota reprobatória.

Sam é um professor na universidade e gosta de arredondar a nota de cada estudante de acordo com as seguintes regras:

1. Se a diferença entre a nota e o próximo múltiplo de $5$ for **menor que 3**, arredonde a nota para cima até o próximo múltiplo de $5$.
2. Se o valor da nota for **menor que 38**, nenhum arredondamento ocorre, pois o resultado ainda seria uma nota reprobatória.

---

## Exemplos

- **84** arredonda para **85** (pois $85 - 84 = 1$, que é menor que $3$).
- **29** não arredonda (o valor é menor que $38$).
- **57** não arredonda (pois $60 - 57 = 3$, que não é menor que $3$).

Dado o valor inicial da nota para cada um dos $n$ alunos de Sam, escreva um código para automatizar o processo de arredondamento.

---

## Descrição da Função

Complete a função `gradingStudents` com o(s) seguinte(s) parâmetro(s):

- `int grades[n]`: as notas antes do arredondamento.

### Retorna
- `int[n]`: as notas após o arredondamento.

---

## Formato de Entrada

- A primeira linha contém um único inteiro, $n$, o número de estudantes.
- Cada linha $i$ das $n$ linhas subsequentes contém um único inteiro, `grades[i]`.

---

## Restrições

- $1 \le n \le 60$
- $0 \le \text{grades}[i] \le 100$

---

## Exemplo de Entrada 0

```text
4
73
67
38
33
```

## Exemplo de Saída 0

```text
75
67
40
33
```

---

## Explicação 0

- **Estudante 1:** Recebeu $73$, e o próximo múltiplo de $5$ a partir de $73$ é $75$. Como $75 - 73 = 2$ (menor que $3$), a nota do estudante é arredondada para **75**.
- **Estudante 2:** Recebeu $67$, e o próximo múltiplo de $5$ a partir de $67$ é $70$. Como $70 - 67 = 3$ (não é menor que $3$), a nota não é modificada e permanece **67**.
- **Estudante 3:** Recebeu $38$, e o próximo múltiplo de $5$ a partir de $38$ é $40$. Como $40 - 38 = 2$ (menor que $3$), a nota é arredondada para **40**.
- **Estudante 4:** Recebeu uma nota abaixo de $38$ ($33$), portanto a nota não é modificada e permanece **33**.
