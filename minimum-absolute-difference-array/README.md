A diferença absoluta é a diferença positiva entre dois valores $a$ e $b$, escrita como $\vert{}a - b\vert{}$ ou $\vert{}b - a\vert{}$, e ambos os resultados são iguais. Se $a = 3$ e $b = 7$, então $\vert{}3 - 7\vert{} = \vert{}7 - 3\vert{} = 4$. Dado um array de números inteiros, encontre a menor diferença absoluta entre quaisquer dois elementos do array.

### Exemplo

$\text{arr} = [-2, 2, 4]$

Existem $3$ pares de números: $[-2, 2]$, $[-2, 4]$ e $[2, 4]$. As diferenças absolutas para esses pares são $\vert{}-2 - 2\vert{} = 4$, $\vert{}-2 - 4\vert{} = 6$ e $\vert{}2 - 4\vert{} = 2$. A menor diferença absoluta é $2$.

### Descrição da Função

Complete a função `minimumAbsoluteDifference` no editor abaixo. Ela deve retornar um número inteiro que representa a menor diferença absoluta entre qualquer par de elementos.

`minimumAbsoluteDifference` possui o(s) seguinte(s) parâmetro(s):

- `int arr[n]`: um array de inteiros

### Retorno

- `int`: a menor diferença absoluta encontrada

### Formato de Entrada

A primeira linha contém um único inteiro $n$, o tamanho de $arr$.

A segunda linha contém $n$ inteiros separados por espaço, $arr[i]$.

### Restrições

- $2 \le n \le 10^5$

- $-10^9 \le arr[i] \le 10^9$

### Exemplo de Entrada 0

```
3
3 -7 0

```

### Exemplo de Saída 0

```
3

```

### Explicação 0

A primeira linha de entrada é o número de elementos do array. O array é $arr = [3, -7, 0]$. Existem três pares para testar: $(3, -7)$, $(3, 0)$ e $(-7, 0)$. As diferenças absolutas são:

- $\vert{}3 - (-7)\vert{} = 10$

- $\vert{}3 - 0\vert{} = 3$

- $\vert{}-7 - 0\vert{} = 7$

Lembre-se de que a ordem dos valores na subtração não altera o resultado. A menor dessas diferenças absolutas é $3$.

### Exemplo de Entrada 1

```
10
-59 -36 -13 1 -53 -92 -2 -96 -54 75

```

### Exemplo de Saída 1

```
1

```

### Explicação 1

A menor diferença absoluta é $\vert{}-54 - (-53)\vert{} = 1$.

### Exemplo de Entrada 2

```
5
1 -3 71 68 17

```

### Exemplo de Saída 2

```
3

```

### Explicação 2

A menor diferença absoluta é $\vert{}71 - 68\vert{} = 3$.
