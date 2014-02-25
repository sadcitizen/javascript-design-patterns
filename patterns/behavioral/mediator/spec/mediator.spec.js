/**
 * Пример использования
 * */
var m = new Mediator();

/**
 * Добавляем обработчик
 * */
m.on('hello', function (data) {
    console.log('Эти данные пришли из медиатора: hello -> ' + data.name);
}, this);

m.on('hello:world', function(data) {
    console.log('Эти данные пришли из медиатора: hello:world -> ' + data.name);
});

m.on('hello:another:world', function(data) {
    console.log('Эти данные пришли из медиатора: hello:another:world -> ' + data.name);
});

m.off('hello');

m.on('goodbye', function(data) {
    console.log('Эти данные пришли из медиатора: goodbye -> ' + data.name);
});

m.on('goodbye:world', function(data) {
    console.log('Эти данные пришли из медиатора: goodbye:world ->' + data.name);
});

m.on('goodbye:another:world', function(data) {
    console.log('Эти данные пришли из медиатора: goodbye:another:world -> ' + data.name);
});

m.on('lorem:ipsum:dolor:sit:amet', function(data) {
    console.log('Эти данные пришли из медиатора: lorem:ipsum:dolor:sit:amet -> ' + data.name);
});

m.on('lorem:ipsum', function(data) {
    console.log('Эти данные пришли из медиатора: lorem:ipsum -> ' + data.name);
});

m.on('lorem:ipsum', function(data) {
    console.log('Эти данные пришли из медиатора второй раз: lorem:ipsum -> ' + data.name);
});

m.off('lorem:ipsum:dolor');

/**
 * Вызываем обработчик
 * */
m.trigger('hello', { name: 'Аполлинарий Лаодикийский' });
m.trigger('hello:world', { name: 'Вильгельм фон Каульбах' });
/*m.trigger('', { name: 'Дени Дидро' });
 m.trigger('', { name: 'Фридрих Ницше' });
 m.trigger('', { name: 'Иммануил Кант' });
 m.trigger('', { name: 'Анри Пуанкаре' });
 m.trigger('', { name: 'Эварист Галуа' });
 m.trigger('', { name: 'Карл Вейерштрасс' });*/
m.trigger('hello:another:world', { name: 'Якоб Бернулли' });
m.trigger('goodbye', { name: 'Жан Даламбер' });
m.trigger('goodbye:world', { name: 'Алан Тьюринг' });
m.trigger('goodbye:another:world', { name: 'Норберт Винер' });
m.trigger('lorem:ipsum:dolor:sit:amet', { name: 'Александр Ляпунов' });
m.trigger('lorem:ipsum', { name: 'Артур Шопенгауэр' });


console.log(m.getStorage());