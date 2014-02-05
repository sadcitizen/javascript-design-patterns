describe('Синглтон / Singleton', function () {

    var firstIns, secondIns;

    describe('Экземпляр хранится в статическом свойстве', function () {
        before(function () {
            firstIns = StaticSingleton.getInstance();
            secondIns = StaticSingleton.getInstance();

            firstIns.toString = function() {
                return '[object StaticSingleton]';
            };
        });

        it('Метод, возвращающий инстанс синглтона должен существовать', function () {
            expect(StaticSingleton.getInstance).to.exist;
        });

        it('Обе переменные ссылаются на один и тот же объект', function () {
            expect(firstIns).to.equal(secondIns);
        });

        it('Метода toString должен существовать', function () {
            expect(secondIns.toString).to.exist;
        });

        it('Метод toString должен вернуть [object Singleton]', function () {
            expect(secondIns.toString()).to.equal('[object StaticSingleton]');
        });
    });

    describe('Экземпляр хранится в статическом свойстве', function () {
        before(function () {
            firstIns = new ClosureSingleton();
            secondIns = new ClosureSingleton();

            /*firstIns.toString = function() {
                return '[object Singleton]';
            };*/
        });

        it('Метод, возвращающий инстанс синглтона должен существовать', function () {
            expect(ClosureSingleton).to.be.a('function');
        });

        it('Обе переменные ссылаются на один и тот же объект', function () {
            expect(firstIns === secondIns).to.equal(true);
        });

        it('Метода toString должен существовать', function () {
            expect(secondIns.toString).to.exist;
        });

        it('Метод toString должен вернуть [object ClosureSingleton]', function () {
            expect(secondIns.toString()).to.equal('[object ClosureSingleton]');
        });
    });
});