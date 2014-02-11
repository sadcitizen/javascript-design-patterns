# Пространство имен / Namespace

Пространства имен помогают уменьшить количество глобальных пере-менных, необходимых нашим программам, и одновременно избежать конфликтов имен и чрезмерного употребления префиксов.

### Пример использования

Создать неймспейс `App.modules.login`:

```js
var App = App || {};

Namespace.create(App, 'modules.login');
```

Создать неймспейс с кодами клавиш `App.keys`:

```js
Namespace.create(App, 'keys', {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    LEFT_ARROW: 37,
    UP_ARROW: 38,
    RIGHT_ARROW: 39,
    DOWN_ARROW: 40
});

console.log(App.keys.TAB); // => 9
```

[Хорошая статья о пространстве имен от Владимира Кузнецова] (http://noteskeeper.ru/264/)