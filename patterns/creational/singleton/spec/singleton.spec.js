describe('Синглтон / Singleton', function () {

    var firstIns, secondIns;

    before(function () {
        firstIns = Singleton.getInstance();
        secondIns = Singleton.getInstance();
    });

    it('Проверка метода, возвращающего инстанс синглтона', function () {
        expect(Singleton.getInstance).to.exist;
    });

    it('Обе переменные ссылаются на один и тот же объект', function () {
        expect(firstIns).to.equal(secondIns);
    });
});