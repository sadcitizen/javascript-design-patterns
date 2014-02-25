# Посредник / Mediator

Определяет объект, в котором инкапсулировано знание о том, как взаимодействуют объекты из некоторого множества. Способствует уменьшению числа связей между объектами, позволяя им работать без явных ссылок друг на друга. Это, в свою очередь дает возможность независимо изменять схему взаимодействия.

### Пример использования

Создадим экземпляр медиатора:
```js
var mediator = new Mediator(); // : - разделитель неймспейсов
```

Создадим обработчик для канала `lorem`:
```js
mediator.on('lorem', function (data) {
    console.log('My namespace is ' + data.namespace);
});
```

Создадим обработчик для вложенного канала 'lorem:ipsum':
```js
mediator.on('lorem:ipsum', function (data) {
    console.log('My namespace is ' + data.namespace);
});
```

Вызовем оба обработчика:
```js
mediator.trigger('lorem', { namespace: 'lorem' });
mediator.trigger('lorem:ipsum', { namespace: 'lorem:ipsum' });
```

В консоли увидим:
```js
My namespace is lorem
My namespace is lorem:ipsum
```

Удалим обработчики для неймспейса `lorem` с учетом вложенности:
```js
mediator.off('lorem', true);
// Такой вызов удалит обработчики как самого неймспейса lorem, так и вложенного в него lorem:ipsum
```

#### Ссылки

* [Пример простого медиатора в виде amd-модуля (gist)] (https://gist.github.com/instanceofpro/9184609)