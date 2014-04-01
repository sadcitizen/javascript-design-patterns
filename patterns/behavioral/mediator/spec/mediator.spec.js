describe('Посредник / Mediator', function () {
    var mediator;

    describe('Проверка объекта', function () {

        before(function () {
            mediator = new Mediator();
        });

        it('Инстанс', function () {
            expect(mediator).to.be.instanceOf(Mediator);
        });

        it('Методы', function() {
            expect(mediator.on).to.be.a('function');
            expect(mediator.off).to.be.a('function');
            expect(mediator.trigger).to.be.a('function');
            expect(mediator.broadcast).to.be.a('function');
            expect(mediator.has).to.be.a('function');
            expect(mediator.clean).to.be.a('function');
            expect(mediator.namespace).to.be.a('function');
            expect(mediator.getStorage).to.be.a('function');
            expect(mediator._runHandlers).to.be.a('function');
            expect(mediator._runHandlersRecursive).to.be.a('function');
        });
    });

    describe('Поведение', function () {

        var aFn, bFn, cFn, dFn, eFn;

        beforeEach(function () {
            mediator = new Mediator();

            aFn = sinon.spy();
            bFn = sinon.spy();
            cFn = sinon.spy();
            dFn = sinon.spy();
            eFn = sinon.spy();
        });

        it('Добавление обработчиков', function () {
            mediator
                .on('namespace', aFn)
                .on('namespace', bFn)
                .on('namespace', cFn)
                .on('namespace', dFn)
                .trigger('namespace');


            expect(aFn.called).to.be.true;
            expect(bFn.called).to.be.true;
            expect(cFn.called).to.be.true;
            expect(dFn.called).to.be.true;
        });

        it('Добавление обработчика с данными', function () {

            var o = { text: 'Hello' };

            mediator
                .on('namespace', aFn)
                .on('namespace', bFn)
                .on('namespace', cFn)
                .on('namespace', dFn)
                .trigger('namespace', o);


            expect(aFn.calledWith(o)).to.be.true;
            expect(bFn.calledWith(o)).to.be.true;
            expect(cFn.calledWith(o)).to.be.true;
            expect(dFn.calledWith(o)).to.be.true;
        });

        it('Добавление вложенных обработчиков', function () {
            mediator
                .on('a', aFn)
                .on('a:b', bFn)
                .on('a:b:c', cFn)
                .on('a:b:c:d', dFn)
                .trigger('a')
                .trigger('a:b:c');


            expect(aFn.called).to.be.true;
            expect(bFn.called).to.be.false;
            expect(cFn.called).to.be.true;
            expect(dFn.called).to.be.false;
        });

        it('Запуск всех вложенных обработчиков', function () {
            var o = { text: 'Hello' };

            mediator
                .on('a', aFn)
                .on('a:b', bFn)
                .on('a:b:c', cFn)
                .on('a:b:c:d', dFn)
                .broadcast('a', o);

            expect(aFn.calledWith(o)).to.be.true;
            expect(bFn.calledWith(o)).to.be.true;
            expect(cFn.calledWith(o)).to.be.true;
            expect(dFn.calledWith(o)).to.be.true;
        });

        it('Удаление из списка обработчиков', function () {

            mediator
                .on('namespace', aFn)
                .on('namespace', bFn)
                .off('namespace')
                .on('namespace', cFn)
                .trigger('namespace');

            expect(aFn.called).to.be.false;
            expect(bFn.called).to.be.false;
            expect(cFn.called).to.be.true;
        });

        it('Удаление всех вложенных обработчиков', function () {
            mediator
                .on('a', aFn)
                .on('a:b', bFn)
                .on('a:b:c', cFn)
                .on('a:b:c:d', dFn)
                .off('a', true);

            expect(aFn.called).to.be.false;
            expect(bFn.called).to.be.false;
            expect(cFn.called).to.be.false;
            expect(dFn.called).to.be.false;
        });
    });
});




///**
// * Пример использования
// * */
//var m = new Mediator();
//
///**
// * Добавляем обработчик
// * */
//m.on('hello', function (data) {
//    console.log('Эти данные пришли из медиатора: hello -> ' + data.name);
//});
//
//m.on('hello:world', function(data) {
//    console.log('Эти данные пришли из медиатора: hello:world -> ' + data.name);
//});
//
//m.on('hello:world:a', function(data) {
//    console.log('Эти данные пришли из медиатора: hello:world:a -> ' + data.name);
//});
//
//m.on('hello:world:b', function(data) {
//    console.log('Эти данные пришли из медиатора: hello:world:b -> ' + data.name);
//});
//
//m.on('hello:world:c', function(data) {
//    console.log('Эти данные пришли из медиатора: hello:world:c -> ' + data.name);
//});
//
//m.on('hello:world:c:d', function(data) {
//    console.log('Эти данные пришли из медиатора: hello:world:c:d -> ' + data.name);
//});
//
//m.on('hello:another', function(data) {
//    console.log('Эти данные пришли из медиатора: hello:another -> ' + data.name);
//});
//
//m.on('hello:another:world', function(data) {
//    console.log('Эти данные пришли из медиатора: hello:another:world -> ' + data.name);
//});
//
//m.on('hello:another:world:a', function(data) {
//    console.log('Эти данные пришли из медиатора: hello:another:world:a -> ' + data.name);
//});
//
//m.on('hello:another:world:b', function(data) {
//    console.log('Эти данные пришли из медиатора: hello:another:world:b -> ' + data.name);
//});
//
////m.off('hello', true);
//
//m.on('goodbye', function(data) {
//    console.log('Эти данные пришли из медиатора: goodbye -> ' + data.name);
//});
//
//m.on('goodbye:world', function(data) {
//    console.log('Эти данные пришли из медиатора: goodbye:world ->' + data.name);
//});
//
//m.on('goodbye:another:world', function(data) {
//    console.log('Эти данные пришли из медиатора: goodbye:another:world -> ' + data.name);
//});
//
//m.on('lorem:ipsum:dolor:sit:amet', function(data) {
//    console.log('Эти данные пришли из медиатора: lorem:ipsum:dolor:sit:amet -> ' + data.name);
//});
//
//m.on('lorem:lorem', function(data) {
//    console.log('Эти данные пришли из медиатора: lorem:lorem -> ' + data.name);
//});
//
//m.on('lorem:ipsum', function(data) {
//    console.log('Эти данные пришли из медиатора: lorem:ipsum -> ' + data.name);
//});
//
////m.off('lorem:ipsum:dolor');
//
///**
// * Вызываем обработчик
// * */
//m.broadcast('hello', { name: 'Аполлинарий Лаодикийский' });
//m.trigger('hello:world', { name: 'Вильгельм фон Каульбах' });
////m.trigger('', { name: 'Дени Дидро' });
////m.trigger('', { name: 'Фридрих Ницше' });
////m.trigger('', { name: 'Иммануил Кант' });
////m.trigger('', { name: 'Анри Пуанкаре' });
////m.trigger('', { name: 'Эварист Галуа' });
//m.trigger('hello:another:world', { name: 'Якоб Бернулли' });
//m.trigger('goodbye', { name: 'Жан Даламбер' });
//m.trigger('goodbye:world', { name: 'Алан Тьюринг' });
//m.trigger('goodbye:another:world', { name: 'Норберт Винер' });
//
//
//m.trigger('lorem:ipsum:dolor:sit:amet', { name: 'Александр Ляпунов' });
//m.trigger('lorem:ipsum', { name: 'Артур Шопенгауэр' });
//m.trigger('lorem:lorem', { name: 'Карл Вейерштрасс' });
//m.broadcast('lorem', { name: 'Рекурсивно' });
//
////console.log(m.getStorage());