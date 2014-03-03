describe('Состояние / State', function () {

    var calc, add, subtract, multiply, divide;

    before(function () {
        add = new Add();
        subtract = new Subtract();
        multiply = new Multiply();
        divide = new Divide();
        calc = new Calculator(add);
    });

    describe('Инстанс', function () {

        it('Calculator и методы', function () {
            expect(calc).to.be.instanceOf(Calculator);
            expect(calc.set).to.be.a('function');
            expect(calc.execute).to.be.a('function');
        });

        it('Add и методы', function () {
            expect(add).to.be.instanceOf(Add);
            expect(add.execute).to.be.a('function');
        });

        it('Subtract и методы', function () {
            expect(subtract).to.be.instanceOf(Subtract);
            expect(subtract.execute).to.be.a('function');
        });

    });

    describe('Поведение', function () {

        it('Сложение', function () {
            expect(calc.execute(4, 5)).to.equal(9);
            expect(calc.execute(0, 0)).to.equal(0);
            expect(calc.execute(-7, 3)).to.equal(-4);
            expect(calc.execute(-2, -8)).to.equal(-10);
        });

        it('Вычитание', function () {
            calc.set(subtract);

            expect(calc.execute(4, 5)).to.equal(-1);
            expect(calc.execute(0, 0)).to.equal(0);
            expect(calc.execute(-7, 3)).to.equal(-10);
            expect(calc.execute(-2, -8)).to.equal(6);
        });

        it('Умножение', function () {
            calc.set(multiply);

            expect(calc.execute(4, 5)).to.equal(20);
            expect(calc.execute(0, 0)).to.equal(0);
            expect(calc.execute(-7, 3)).to.equal(-21);
            expect(calc.execute(-2, -8)).to.equal(16);
        });

        it('Деление', function () {
            calc.set(divide);

            expect(calc.execute(40, 5)).to.equal(8);
            expect(calc.execute(2, 4)).to.equal(0.5);
            expect(calc.execute(-6, 3)).to.equal(-2);
            expect(calc.execute(-2, -8)).to.equal(0.25);
        });
    });
});