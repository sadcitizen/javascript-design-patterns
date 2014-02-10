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
            expect(calc.add).to.be.a('function');
            expect(calc.set).to.be.a('function');
            expect(calc.execute).to.be.a('function');
        });
    });

    describe('Поведение', function () {

        it('Calculator.execute', function () {
            expect(calc.set('add').execute(4, 5)).to.equal(9);
            expect(calc.set('subtract').execute(4, 5)).to.equal(-1);
            expect(calc.set('multiply').execute(4, 5)).to.equal(20);
            expect(calc.set('divide').execute(40, 5)).to.equal(8);
        });

        it('Calculator.add', function () {

            calc
                .add('pow', function(x, y) {
                    return Math.pow(x, y);
                })
                .set('pow');

            expect(calc.execute(15, 2)).to.equal(225);

        });

    });
});