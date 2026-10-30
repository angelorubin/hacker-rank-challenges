# Cutting Boards

Solução em JavaScript para o desafio **Cutting Boards** do HackerRank. O objetivo é dividir uma placa retangular em quadrados de `1 x 1` gastando o menor custo total possível.

## Descrição

A placa tem `m` linhas e `n` colunas e precisa ser cortada em `1 x 1` quadrados. Os custos dos cortes possíveis são dados em dois arrays:

- `cost_y`: custo de cada um dos `m - 1` cortes horizontais;
- `cost_x`: custo de cada um dos `n - 1` cortes verticais.

O custo de um corte é multiplicado pela quantidade de segmentos que ele atravessa na placa naquele momento. Assim, um corte horizontal feito depois de `v` cortes verticais custa `cost_y[i] * (v + 1)`, e um corte vertical feito depois de `h` cortes horizontais custa `cost_x[j] * (h + 1)`. Por isso a ordem dos cortes altera o custo total.

Como o resultado pode ser muito grande, retorne o custo total módulo `10^9 + 7`.

## Como funciona

A estratégia é gulosa:

1. ordene `cost_y` e `cost_x` em ordem decrescente;
2. mantenha a quantidade de segmentos atuais em cada direção, começando em `1` para ambas;
3. compare o maior custo pendente de cada direção e faça primeiro o mais caro:
   - corte horizontal: soma `cost_y[i] * segmentosVerticais` e incrementa `segmentosHorizontais`;
   - corte vertical: soma `cost_x[j] * segmentosHorizontais` e incrementa `segmentosVerticais`;
4. em caso de empate, qualquer uma das duas direções pode ser escolhida.

Fazer os cortes mais caros no início garante que eles sejam multiplicados pela menor quantidade possível de segmentos.

Aplique o módulo `10^9 + 7` a cada soma, para que o total não perca precisão.

## Formato de entrada

Na plataforma, a entrada contém `t` casos de teste. Para cada caso:

- `m`: quantidade de linhas da placa;
- `n`: quantidade de colunas da placa;
- `cost_y`: `m - 1` inteiros, os custos dos cortes horizontais;
- `cost_x`: `n - 1` inteiros, os custos dos cortes verticais.

## Formato de saída

Um inteiro por caso de teste: o menor custo total, módulo `10^9 + 7`.

## Exemplo

Entrada:

```text
m = 6
n = 4
cost_y = [2, 1, 3, 1, 4]
cost_x = [4, 1, 2]
```

Saída:

```text
42
```

Explicação: uma sequência ótima de cortes, sempre começando pelo mais caro disponível:

| Corte | Direção | Custo unitário | Segmentos atravessados | Custo |
|---|---|---|---|---|
| 1 | Horizontal | 4 | 1 | 4 |
| 2 | Vertical | 4 | 2 | 8 |
| 3 | Horizontal | 3 | 2 | 6 |
| 4 | Horizontal | 2 | 2 | 4 |
| 5 | Vertical | 2 | 4 | 8 |
| 6 | Horizontal | 1 | 3 | 3 |
| 7 | Horizontal | 1 | 3 | 3 |
| 8 | Vertical | 1 | 6 | 6 |

Soma dos custos: `4 + 8 + 6 + 4 + 8 + 3 + 3 + 6 = 42`.

## Complexidade

- **Tempo:** `O(m log m + n log n)`, por causa da ordenação dos dois arrays.
- **Espaço adicional:** `O(1)`, se a ordenação for feita no próprio array.

## Como executar

É necessário ter o [Node.js](https://nodejs.org/) instalado. Na pasta `cutting-boards`, execute:

```bash
node index.js
```

## Arquivo da solução

O arquivo [`index.js`](./index.js) deve conter a função `boardCutting(cost_y, cost_x)`, que recebe os dois arrays de custos e retorna o menor custo total de um caso de teste, módulo `10^9 + 7`.