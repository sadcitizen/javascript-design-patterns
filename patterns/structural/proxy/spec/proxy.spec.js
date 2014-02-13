describe('Заместитель / Proxy или Суррогат / Surrogate', function () {

    var proxy, calc;

    before(function () {
        calc = new Calc();
        proxy = new CalcProxy();
    });

    describe('Calc', function () {

        it('Инстанс', function () {
            expect(Calc).to.be.a('function');
            expect(calc).to.be.an.instanceOf(Calc);
        });

        describe('Методы', function () {

            it('add', function () {
                expect(calc.add).to.be.a('function');
                expect(calc.add(2, 2)).to.equal(4);
            });

            it('subtract', function () {
                expect(calc.subtract).to.be.a('function');
                expect(calc.subtract(8, 2)).to.equal(6);
            });

            it('multiply', function () {
                expect(calc.multiply).to.be.a('function');
                expect(calc.multiply(8, 2)).to.equal(16);
            });


            it('divide', function () {
                expect(calc.divide).to.be.a('function');
                expect(calc.divide(4, 2)).to.equal(2);
            });


            it('power', function () {
                expect(calc.power).to.be.a('function');
                expect(calc.power(8, 2)).to.equal(64);
            });

            it('root', function () {
                expect(calc.root).to.be.a('function');
                expect(calc.root(16, 2)).to.equal(4);
            });
        });
    });

    describe('CalcProxy', function () {

        it('Инстанс', function () {
            expect(CalcProxy).to.be.a('function');
            expect(proxy).to.be.an.instanceOf(CalcProxy);
        });

        describe('Методы', function () {

            it('add', function () {
                expect(proxy.add).to.be.a('function');
                expect(proxy.add('2x2', 2)).to.equal(4);
            });

            it('subtract', function () {
                expect(proxy.subtract).to.be.a('function');
                expect(proxy.subtract(8, 2)).to.equal(6);
            });

            it('multiply', function () {
                expect(proxy.multiply).to.be.a('function');
                expect(proxy.multiply('08', 2)).to.equal(16);
            });


            it('divide', function () {
                expect(proxy.divide).to.be.a('function');
                expect(proxy.divide(4, 2)).to.equal(2);
            });


            it('power', function () {
                expect(proxy.power).to.be.a('function');
                expect(proxy.power(8, '2     ')).to.equal(64);
            });

            it('root', function () {
                expect(proxy.root).to.be.a('function');
                expect(proxy.root('16', 2)).to.equal(4);
            });
        });
    });
});