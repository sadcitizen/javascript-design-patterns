describe('Стратегия / Strategy', function () {

    var calc;

    beforeEach(function () {
        calc = new Calculator();
    });

    describe('Инстанс', function () {

        it('Strategy', function () {
            expect(calc).to.be.instanceOf(Calculator);
        });

        it('Методы', function () {
            expect(calc.set).to.be.a('function');
            expect(calc.execute).to.be.a('function');
        });
    });

    describe('Поведение', function () {

        it('Calculator.execute', function () {
            expect(calc.execute('add', 4, 5)).to.equal(9);
            expect(calc.execute('subtract', 4, 5)).to.equal(-1);
            expect(calc.execute('multiply', 4, 5)).to.equal(20);
            expect(calc.execute('divide', 40, 5)).to.equal(8);
        });

        it('Calculator.set', function () {

            calc.set('pow', function(x, y) {
                return Math.pow(x, y);
            });

            expect(calc.execute('pow', 15, 2)).to.equal(225);

        });

    });
});