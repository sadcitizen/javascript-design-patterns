/**
 * Пример использования
 * */
var m = new Mediator();

/**
 * Добавляем обработчик
 * */
m.on('hello', function (data) {
    console.log('Эти данные пришли из медиатора: hello -> ' + data.name);
});

m.on('hello:world', function(data) {
    console.log('Эти данные пришли из медиатора: hello:world -> ' + data.name);
});

m.on('hello:world:a', function(data) {
    console.log('Эти данные пришли из медиатора: hello:world:a -> ' + data.name);
});

m.on('hello:world:b', function(data) {
    console.log('Эти данные пришли из медиатора: hello:world:b -> ' + data.name);
});

m.on('hello:world:c', function(data) {
    console.log('Эти данные пришли из медиатора: hello:world:c -> ' + data.name);
});

m.on('hello:world:c:d', function(data) {
    console.log('Эти данные пришли из медиатора: hello:world:c:d -> ' + data.name);
});

m.on('hello:another', function(data) {
    console.log('Эти данные пришли из медиатора: hello:another -> ' + data.name);
});

m.on('hello:another:world', function(data) {
    console.log('Эти данные пришли из медиатора: hello:another:world -> ' + data.name);
});

m.on('hello:another:world:a', function(data) {
    console.log('Эти данные пришли из медиатора: hello:another:world:a -> ' + data.name);
});

m.on('hello:another:world:b', function(data) {
    console.log('Эти данные пришли из медиатора: hello:another:world:b -> ' + data.name);
});

//m.off('hello', true);

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

m.on('lorem:lorem', function(data) {
    console.log('Эти данные пришли из медиатора: lorem:lorem -> ' + data.name);
});

m.on('lorem:ipsum', function(data) {
    console.log('Эти данные пришли из медиатора: lorem:ipsum -> ' + data.name);
});

m.off('lorem:ipsum:dolor');

/**
 * Вызываем обработчик
 * */
m.broadcast('hello', { name: 'Аполлинарий Лаодикийский' });
//m.trigger('hello:world', { name: 'Вильгельм фон Каульбах' });
//m.trigger('', { name: 'Дени Дидро' });
//m.trigger('', { name: 'Фридрих Ницше' });
//m.trigger('', { name: 'Иммануил Кант' });
//m.trigger('', { name: 'Анри Пуанкаре' });
//m.trigger('', { name: 'Эварист Галуа' });
//m.trigger('hello:another:world', { name: 'Якоб Бернулли' });
//m.trigger('goodbye', { name: 'Жан Даламбер' });
//m.trigger('goodbye:world', { name: 'Алан Тьюринг' });
//m.trigger('goodbye:another:world', { name: 'Норберт Винер' });
//m.trigger('lorem:ipsum:dolor:sit:amet', { name: 'Александр Ляпунов' });
//m.trigger('lorem:ipsum', { name: 'Артур Шопенгауэр' });
//m.trigger('lorem:lorem', { name: 'Карл Вейерштрасс' });

//console.log(m.getStorage());