describe('Синглтон / Singleton', function () {

    var firstIns, secondIns;

    describe('Экземпляр хранится в замыкании, инстанс создается статическим методом', function () {
        before(function () {
            firstIns = ClosureStaticSingleton.getInstance();
            secondIns = ClosureStaticSingleton.getInstance();

            firstIns.toString = function() {
                return '[object ClosureStaticSingleton]';
            };
        });

        it('Метод, возвращающий инстанс синглтона должен существовать', function () {
            expect(ClosureStaticSingleton.getInstance).to.exist;
        });

        it('Обе переменные ссылаются на один и тот же объект', function () {
            expect(firstIns).to.equal(secondIns);
        });

        it('Метода toString должен существовать', function () {
            expect(secondIns.toString).to.exist;
        });

        it('Метод toString должен вернуть [object ClosureStaticSingleton]', function () {
            expect(secondIns.toString()).to.equal('[object ClosureStaticSingleton]');
        });
    });

    describe('Экземпляр хранится в замыкании, инстанс создается конструктором', function () {
        before(function () {
            firstIns = new ClosureConstructorSingleton();
            secondIns = new ClosureConstructorSingleton();
        });

        it('Метод, возвращающий инстанс синглтона должен существовать', function () {
            expect(ClosureConstructorSingleton).to.be.a('function');
        });

        it('Обе переменные ссылаются на один и тот же объект', function () {
            expect(firstIns === secondIns).to.equal(true);
        });

        it('Метода toString должен существовать', function () {
            expect(secondIns.toString).to.exist;
        });

        it('Метод toString должен вернуть [object ClosureConstructorSingleton]', function () {
            expect(secondIns.toString()).to.equal('[object ClosureConstructorSingleton]');
        });
    });

    describe('Экземпляр хранится в статическом свойстве, инстанс создается конструктором', function () {
        before(function () {
            firstIns = new StaticConstructorSingleton();
            secondIns = new StaticConstructorSingleton();
        });

        it('Метод, возвращающий инстанс синглтона должен существовать', function () {
            expect(StaticConstructorSingleton).to.be.a('function');
        });

        it('Обе переменные ссылаются на один и тот же объект', function () {
            expect(firstIns === secondIns).to.equal(true);
        });

        it('Метода toString должен существовать', function () {
            expect(secondIns.toString).to.exist;
        });

        it('Метод toString должен вернуть [object StaticConstructorSingleton]', function () {
            expect(secondIns.toString()).to.equal('[object StaticConstructorSingleton]');
        });
    });
});