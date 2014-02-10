describe('Стратегия / Strategy', function () {

    var strategy;

    beforeEach(function () {
        strategy = new Strategy();
    });

    describe('Инстанс', function () {

        it('Strategy', function () {
            expect(strategy).to.be.instanceOf(Strategy);
        });

    });

});