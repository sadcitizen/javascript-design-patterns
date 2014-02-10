describe('Наблюдатель / Observer / Publisher-Subscriber', function () {

    var observer;

    describe('Проверка объекта', function () {

        before(function () {
            observer = new Observer();
        });

        it('Инстанс', function () {
            expect(observer).to.be.instanceOf(Observer);
        });

        it('Методы', function() {
            expect(observer.subscribe).to.be.a('function');
            expect(observer.publish).to.be.a('function');
            expect(observer.unsubscribe).to.be.a('function');
        });
    });

    describe('Поведение', function() {

        var firstFn, secondFn, thirdFn;

        beforeEach(function () {
            observer = new Observer();
            firstFn = sinon.spy();
            secondFn = sinon.spy();
            thirdFn = sinon.spy();
        });

        it('Добавление обработчиков', function () {
            observer
                .subscribe(firstFn)
                .subscribe(secondFn)
                .subscribe(thirdFn)
                .publish();

            expect(firstFn.called).to.be.true;
            expect(secondFn.called).to.be.true;
            expect(thirdFn.called).to.be.true;
        });

        it('Добавление обработчика с данными', function () {

            var obj = {
                text: 'Hello'
            };

            observer
                .subscribe(firstFn)
                .subscribe(secondFn)
                .subscribe(thirdFn)
                .publish(obj);

            expect(firstFn.calledWith(obj)).to.be.true;
            expect(secondFn.calledWith(obj)).to.be.true;
            expect(thirdFn.calledWith(obj)).to.be.true;
        });

        it('Удаление из списка обработчиков', function () {

            observer
                .subscribe(firstFn)
                .subscribe(secondFn)
                .reset()
                .subscribe(thirdFn)
                .publish();

            expect(firstFn.called).to.be.false;
            expect(secondFn.called).to.be.false;
            expect(thirdFn.called).to.be.true;
        });

        it('Очистка списка обработчиков', function () {

            observer
                .subscribe(firstFn)
                .subscribe(secondFn)
                .subscribe(thirdFn)
                .unsubscribe(firstFn)
                .publish();

            expect(firstFn.called).to.be.false;
            expect(secondFn.called).to.be.true;
            expect(thirdFn.called).to.be.true;
        });
    });
});