describe('Модуль / Module', function () {

    describe('Object Literal', function () {

        it('Инстанс', function () {
            expect(calculatorLiteral).to.be.an('object');
            expect(calculatorLiteral).not.to.be.empty;
        });

        it('Методы', function () {
            expect(calculatorLiteral.add).to.be.a('function');
            expect(calculatorLiteral.add(2, 2)).to.equal(4);
            expect(calculatorLiteral.divide).to.be.a('function');
            expect(calculatorLiteral.divide(4, 2)).to.equal(2);
            expect(calculatorLiteral.multiply).to.be.a('function');
            expect(calculatorLiteral.multiply(8, 2)).to.equal(16);
            expect(calculatorLiteral.subtract).to.be.a('function');
            expect(calculatorLiteral.subtract(8, 2)).to.equal(6);
        });
    });

    describe('Function', function () {

        it('Инстанс', function () {
            expect(calculatorFunc).to.be.an('object');
            expect(calculatorFunc).not.to.be.empty;
        });

        it('Публичные методы', function () {
            expect(calculatorFunc.add).to.be.a('function');
            expect(calculatorFunc.add(2, 2)).to.equal(4);
            expect(calculatorFunc.divide).to.be.a('function');
            expect(calculatorFunc.divide(4, 2)).to.equal(2);
            expect(calculatorFunc.multiply).to.be.a('function');
            expect(calculatorFunc.multiply(8, 2)).to.equal(16);
            expect(calculatorFunc.subtract).to.be.a('function');
            expect(calculatorFunc.subtract(8, 2)).to.equal(6);
        });

        it('Приватный метод', function () {
            expect(calculatorFunc.abs).to.be.undefined;
        });
    });

    describe('Revealing Module', function () {

        it('Инстанс', function () {
            expect(calculatorReleaving).to.be.an('object');
            expect(calculatorReleaving).not.to.be.empty;
        });

        it('Публичные методы', function () {
            expect(calculatorReleaving.add).to.be.a('function');
            expect(calculatorReleaving.add(2, 2)).to.equal(4);
            expect(calculatorReleaving.divide).to.be.a('function');
            expect(calculatorReleaving.divide(4, 2)).to.equal(2);
            expect(calculatorReleaving.multiply).to.be.a('function');
            expect(calculatorReleaving.multiply(8, 2)).to.equal(16);
            expect(calculatorReleaving.subtract).to.be.a('function');
            expect(calculatorReleaving.subtract(8, 2)).to.equal(6);
            expect(calculatorReleaving.ringLength).to.be.a('function');
            expect(calculatorReleaving.ringLength(2)).to.equal(12.5663704);
        });

        it('Приватный метод', function () {
            expect(calculatorReleaving.abs).to.be.undefined;
        });
    });

    describe('Constructor', function () {

        var calc;

        before(function () {
            calc = new calculatorCtor();
        });

        it('Инстанс', function () {
            expect(calculatorCtor).to.be.a('function');
            expect(calc).to.be.an.instanceOf(calculatorCtor);
        });

        it('Публичные методы', function () {
            expect(calc.add).to.be.a('function');
            expect(calc.add(2, 2)).to.equal(4);
            expect(calc.divide).to.be.a('function');
            expect(calc.divide(4, 2)).to.equal(2);
            expect(calc.multiply).to.be.a('function');
            expect(calc.multiply(8, 2)).to.equal(16);
            expect(calc.subtract).to.be.a('function');
            expect(calc.subtract(8, 2)).to.equal(6);
        });

        it('Приватный метод', function () {
            expect(calc.abs).to.be.undefined;
        });
    });
});