A casa do Sam tem uma macieira e uma laranjeira que produzem uma abundância de frutos. Usando as informações fornecidas abaixo, determine o número de maçãs e laranjas que caem na casa do Sam.

No diagrama abaixo:

A região vermelha denota a casa, onde $s$ é o ponto inicial, e $t$ é o ponto final. A macieira está à esquerda da casa, e a laranjeira está à sua direita.
Assuma que as árvores estão localizadas em um único ponto, onde a macieira está no ponto $a$, e a laranjeira está no ponto $b$.
Quando um fruto cai de sua árvore, ele pousa a $d$ unidades de distância de sua árvore de origem ao longo do eixo $x$. *Um valor negativo de* $d$ *significa que o fruto caiu* $d$ *unidades à esquerda da árvore, e um valor positivo de* $d$ *significa que ele cai* $d$ *unidades à direita da árvore.*
Apple and orange(2).png

Dado o valor de $d$ para $m$ maçãs e $n$ laranjas, determine quantas maçãs e laranjas cairão na casa do Sam (ou seja, no intervalo inclusivo $[s, t]$)?

Por exemplo, a casa do Sam fica entre $s = 7$ e $t = 10$. A macieira está localizada em $a = 4$ e a laranjeira em $b = 12$. Existem $3$ maçãs e $3$ laranjas. As maçãs são arremessadas a $2$, $3$ e $-4$ unidades de distância de $a$, e as laranjas a $3$, $-2$ e $-4$ unidades de distância. Adicionando a distância de cada maçã à posição da árvore, elas pousam em $4+2=6$, $4+3=7$ e $4-4=0$. As laranjas pousam em $12+3=15$, $12-2=10$ e $12-4=8$. Uma maçã e duas laranjas caem no intervalo inclusivo $[7, 10]$, então imprimimos

```
1
2

```

### Descrição da Função

Complete a função `countApplesAndOranges` no editor abaixo. Ela deve imprimir o número de maçãs e laranjas que caem na casa do Sam, cada uma em uma linha separada.

`countApplesAndOranges` tem o(s) seguinte(s) parâmetro(s):

* **s**: inteiro, ponto inicial da localização da casa do Sam.

* **t**: inteiro, localização final da localização da casa do Sam.

* **a**: inteiro, localização da macieira.

* **b**: inteiro, localização da laranjeira.

* **apples**: array de inteiros, distâncias em que cada maçã cai da árvore.

* **oranges**: array de inteiros, distâncias em que cada laranja cai da árvore.

### Formato de Entrada

A primeira linha contém dois inteiros separados por espaço denotando os respectivos valores de $s$ e $t$.
A segunda linha contém dois inteiros separados por espaço denotando os respectivos valores de $a$ e $b$.
A terceira linha contém dois inteiros separados por espaço denotando os respectivos valores de $m$ e $n$.
A quarta linha contém $m$ inteiros separados por espaço denotando as respectivas distâncias que cada maçã cai do ponto $a$.
A quinta linha contém $n$ inteiros separados por espaço denotando as respectivas distâncias que cada laranja cai do ponto $b$.

### Restrições

### Formato de Saída

Imprima dois inteiros em duas linhas diferentes:

O primeiro inteiro: o número de maçãs que caem na casa do Sam.
O segundo inteiro: o número de laranjas que caem na casa do Sam.

### Exemplo de Entrada 0

```
7 11
5 15
3 2
-2 2 1
5 -6

```

### Exemplo de Saída 0

```
1
1

```

### Explicação 0

A primeira maçã cai na posição $5 + (-2) = 3$.
A segunda maçã cai na posição $5 + 2 = 7$.
A terceira maçã cai na posição $5 + 1 = 6$.
A primeira laranja cai na posição $15 + 5 = 20$.
A segunda laranja cai na posição $15 + (-6) = 9$.
Apenas um fruto (a segunda maçã) cai dentro da região entre $7$ e $11$, então imprimimos $1$ como nossa primeira linha de saída.
Apenas a segunda laranja cai dentro da região entre $7$ e $11$, então imprimimos $1$ como nossa segunda linha de saída.
