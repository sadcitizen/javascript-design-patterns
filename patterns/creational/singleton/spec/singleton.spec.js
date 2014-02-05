describe('Синглтон / Singleton', function () {

    var firstIns, secondIns;

    describe('Экземпляр хранится в замыкании, инстанс создается статическим методом', function () {
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

    describe('Экземпляр хранится в замыкании, инстанс создается конструктором', function () {
        before(function () {
            firstIns = new ClosureSingleton();
            secondIns = new ClosureSingleton();
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

    describe('Экземпляр хранится в статическом свойстве, инстанс создается конструктором', function () {
        before(function () {
            firstIns = new NewSingleton();
            secondIns = new NewSingleton();
        });

        it('Метод, возвращающий инстанс синглтона должен существовать', function () {
            expect(NewSingleton).to.be.a('function');
        });

        it('Обе переменные ссылаются на один и тот же объект', function () {
            expect(firstIns === secondIns).to.equal(true);
        });

        it('Метода toString должен существовать', function () {
            expect(secondIns.toString).to.exist;
        });

        it('Метод toString должен вернуть [object NewSingleton]', function () {
            expect(secondIns.toString()).to.equal('[object NewSingleton]');
        });
    });
});