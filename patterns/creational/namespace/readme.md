# Пространство имен / Namespace

Пространства имен помогают уменьшить количество глобальных пере-менных, необходимых нашим программам, и одновременно избежать конфликтов имен и чрезмерного употребления префиксов.

### Пример использования

Создать неймспейс `App.modules.login`:

```js
var App = App || {};

Namespace.create(App, 'modules.login');
```

Создать неймспейс с объектом, который хранит коды клавиш `App.keys`:

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

Создать неймспейс с функцией-фабрикой

```js
Namespace.create(App, 'entities.user', function () {
    function User(name) {
        this._name = name;
    }

    User.prototype.introduce = function () {
        console.log('Привет, меня зовут ' + this._name);
    };

    return User;
});

var user = new App.entities.user('Козьма Прутков');
user.introduce(); // => 'Привет, меня зовут Козьма Прутков'
```

#### Ссылки

+ [Пространство имен в YUI3] (http://yuilibrary.com/yui/docs/api/classes/YUI.html#method_namespace)
+ [Статья от Владимира Кузнецова] (http://noteskeeper.ru/264/)