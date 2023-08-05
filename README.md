# Frontend часть проекта "Платформа для управления найма"

## Оглавление

- [О проекте](#о-проекте)
  - [Старт работы с проектом](#старт-работы-с-проектом)
  - [Работа с коммитами](#работа-с-коммитами)
  - [Работа с SCSS](#работа-с-scss)
    - [Миксины](#миксины)
    - [Переменные](#переменные)
  - [Скрипты запуска проекта](#скрипты-запуска-проекта)
  - [Используемые технологии](#используемые-технологии)

## О проекте

### Старт работы с проектом

- Перед стартом работы с проектом **не забываем** установить все необходимые зависимости:

  ```sh
  npm install
  ```

- Устанавливаем Husky:

  ```sh
  npm run prepare
  ```

### Работа с коммитами

- Убеждаемся, что на локальном компьютере последняя версия нужной ветки проекта (для разработки это - `develop`)

  ```sh
  git pull
  ```

- От ветки `develop` создаём ветку для работы:

  ```sh
  git checkout -b feat/your_work_name //(если задача на новую фичу)
  git checkout -b fix/your_work_name //(если задача на правку бага),
  git checkout -b chore/your_work_name //(если что-то прочее)
  ```

- Перед коммитом необходимо проверить, что служебные файлы не попадают в коммит. Служебные файлы добавляем в `.gitignore`. При необходимости актуализируем `README.md`

- Делаем коммит:

  ```sh
  git add -A //Добавляем файлы
  npm run commit
  //Что за коммит?
  //Объём коммита (варианты - Tiny, Small, Medium, Large, X-Large)
  //Сокращенное описание коммита
  //Полная информация о коммите
  //No
  //No
  ```

- Если всё сделано правильно, то в консоли увидим, как отработает линтер (lint-staged) и форматер

- Проверить, что в ветке `develop` самый актуальный код (`git checkout develop`, `git pull`)

- Смержить код из `develop` в свою ветку (`git checkout ваша_ветка`, `git merge develop`), решить все конфликты

- Проверить, что ваш код работает после объединения с кодом из `develop`

- `git push`

### Работа с SCSS

Миксины и переменные находятся в директории `src/components/Shared/`. Для того чтобы работать с миксинами и переменными **необходимо в начале стилевого файла компонента указать следующие импорты** (если их не указать, то при сохранение изменений в файле получим ошибку о том, что переменная или миксин не найдены):

```scss
@import '../../Shared/mixins';
@import '../../Shared/variables';
```

#### Миксины

Пример миксины:

```scss
@mixin font-sans($size, $color, $weight, $lh: false, $ls: false) {
  font: {
    family: 'OpenSans', Helvetica, Arial, sans-serif;
    size: $size;
    weight: $weight;
  }
  color: $color;
  @if $lh {
    line-height: $lh;
  }
  @if $ls {
    letter-spacing: $ls;
  }
}
```

Миксин принимает 5 параметров:

- `$size` - отвечает за размер шрифта, является обязательным параметром
- `$color` - отвечает за цвет шрифта, является обязательным параметром
- `$weight` - отвечает за вес шрифта, является обязательным параметром
- `$lh` - отвечает за высоту строки, является не обязательным, т.е. если его не указывать, то можно считать, что данный параметр вообще не указан, и браузер использует его значение по умолчанию.
- `$ls` - отвечает за расстояние между словами, является не обязательным, т.е. если его не указывать, то можно считать, что данный параметр вообще не указан, и браузер использует его значение по умолчанию.

Пример использования миксины:

```scss
.app {
  &__content {
    /* Без необязательных параметров */
    @include font-sans($textXL, $color-violet, 700);
  }
  &__test {
    /* С использованием необязательных параметров */
    @include font-itim($textXL, $color-light-grey, 400, 1.5, 3px);
  }
}
```

#### Переменные

- Для удобства переменные цвета начинаются с `$color-...`, переменные размера шрифта с `$text...`, это необходимо чтобы Emmet не вываливал вам все значения со знаком `$`, а вы пытались вспомнить название цвета.
- При выборе названия переменной цвета пытаемся исходить из следующей логики
  - Если цвет используется например не только в тексте, но и, допустим, как фоновой цвет элементов, то стараемся назвать переменную по названию цвета, например `$color-violet`.
  - Если цвет используется, допустим как фоновый цвет элемента, то стараемся назвать его по месту применения, например `$color-bg-divider`.

### Скрипты запуска проекта

- Запуск проекта в режиме разработки:

  ```sh
  npm run start
  ```

- Сборка проекта для деплоя:

  ```sh
  npm run build
  ```

- Запуск Storybook:

  ```sh
  npm run storybook
  ```

- Сборка Storybook для деплоя на сервер:

  ```sh
  npm run build-storybook
  ```

- Проверка проекта на ошибки:

  ```sh
  npm run lint
  ```

- Исправление некоторых ошибок (для которых доступно автоисправление):

  ```sh
  npm run lint:fix
  ```

- Форматирование кода (легче установить и настроить расширение Prettier на автоматическое форматирование при сохранении), команда нужна для работы Husky:

  ```sh
  npm run format
  ```

- Создание коммита (Добавляем файлы в staged (git add -A) далее вызываем команду npm run commit и следуем подсказкам в консоли):

  ```sh
  npm run commit
  ```

### Используемые технологии

- React v 18.2.0
- React-router-dom v 6.14.1
- Storybook v 7.0.7
- Commitizen v 4.3.0
- Eslint-config-airbnb v 19.0.4
- Husky v 8.0.3
- Prettier v 2.8.8
- Sass v 1.63.6
