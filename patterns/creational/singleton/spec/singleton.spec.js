describe('Синглтон / Singleton', function () {

    var firstIns, secondIns;

    before(function () {
        firstIns = Singleton.getInstance();
        secondIns = Singleton.getInstance();

        firstIns.toString = function() {
            return '[object Singleton]';
        };
    });

    it('Метод, возвращающий инстанс синглтона должен существовать', function () {
        expect(Singleton.getInstance).to.exist;
    });

    it('Обе переменные ссылаются на один и тот же объект', function () {
        expect(firstIns).to.equal(secondIns);
    });

    it('Метода toString должен существовать', function () {
        expect(secondIns.toString).to.exist;
    });
});