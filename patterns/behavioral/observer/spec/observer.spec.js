describe('Наблюдатель / Observer / Publisher-Subscriber', function () {

    var observer;

    before(function () {
        observer = new Observer();
    });

    describe('Проверка объекта', function () {

        it('Инстанс', function () {
            expect(observer).to.be.instanceOf(Observer);
        });

        it('Методы', function() {
            expect(observer.subscribe).to.be.a('function');
            expect(observer.publish).to.be.a('function');
            expect(observer.unsubscribe).to.be.a('function');
        });
    });
});