# Проект "Игры разума"

[![Actions Status](https://github.com/ElenaNek/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/ElenaNek/frontend-project-44/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/d4b0879c3c7e0d01321f/maintainability)](https://codeclimate.com/github/ElenaNek/frontend-project-44/maintainability)

**Системные требования:**

* ОС Linux;
* Node version 18.

**Установка:**

```node
git clone git@github.com:ElenaNek/frontend-project-44.git

npm i

npm link
```

## Описание проекта

**"Игры разума"** - это проект, в котором реализовано 5 консольных игр. Пользователю  необходимо сообщить свое имя и ответить на вопрос правильно 3 раза. В случае, если пользователь даст неверный ответ, игра завершается и будет предложено попробовать еще раз.

### Игра 1: "Проверка на чётность"

Команда `brain-even` в терминале запускает игру.
Пользователю показывается случайное число. И ему нужно ответить *yes*, если число чётное, или *no* — если нечётное.

[![asciicast](https://asciinema.org/a/URQzDgQpJoWwSzTBxsNFwSt6m.svg)](https://asciinema.org/a/URQzDgQpJoWwSzTBxsNFwSt6m)

### Игра 2: "Калькулятор"

Команда `brain-calc` запускает игру.
Пользователю показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.

[![asciicast](https://asciinema.org/a/nPhgVxugKNSp5NxvLOSb9CQpk.svg)](https://asciinema.org/a/nPhgVxugKNSp5NxvLOSb9CQpk)

### Игра 3: "Наибольший общий делитель (НОД)"

Команда `brain-gcd` запускает игру.
Пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

[![asciicast](https://asciinema.org/a/yF14AvE7hCYLsTxoEnnV7EO2Z.svg)](https://asciinema.org/a/yF14AvE7hCYLsTxoEnnV7EO2Z)

### Игра 4: "Арифметическая прогрессия"

Команда `brain-progression` запускает игру.
Показывается ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Пользователь должен определить это число.

[![asciicast](https://asciinema.org/a/441TtxaLbleMknPkbuoEkAqle.svg)](https://asciinema.org/a/441TtxaLbleMknPkbuoEkAqle)

### Игра 5: "Простое ли число?"

Команда `brain-prime` запускает игру.
Пользователю показывается случайное число. И ему нужно ответить *yes*, если число простое, или *no* — если нет.

[![asciicast](https://asciinema.org/a/ODtKMX3lqrQ6ifB2CRDGWO4JC.svg)](https://asciinema.org/a/ODtKMX3lqrQ6ifB2CRDGWO4JC)
