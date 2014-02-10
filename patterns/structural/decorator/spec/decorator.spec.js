describe('Декоратор / Decorator или Оболочка / Wrapper', function() {

    var beverage, vine;

    before(function () {
        beverage = new Beverage(100, 'Unknown beverage');
        vine = new Vine('Chateau Rieussec', 'white', 250, 'Sauternes 1-er Grand Cru Classe AOC');
    });

    describe('Инстансы', function () {
        it("Beverage", function () {
            expect(beverage).to.be.an.instanceOf(Beverage);
            expect(beverage.getCost).to.be.a('function');
            expect(beverage.getDescription).to.be.a('function');
        });

        it("Vine", function () {
            expect(vine).to.be.an.instanceOf(Vine);
            expect(vine.getCost).to.be.a('function');
            expect(vine.getDescription).to.be.a('function');
            expect(vine.getName).to.be.a('function');
            expect(vine.getColor).to.be.a('function');
        });
    });

    describe('Методы', function () {
        it("Метод getName()", function () {
            expect(vine.getName()).to.equal('Chateau Rieussec');
        });

        it("Метод getColor()", function () {
            expect(vine.getColor()).to.equal('white');
        });

        it("Метод getCost()", function () {
            expect(vine.getCost()).to.equal(250);
        });

        it("Метод getName()", function () {
            expect(vine.getDescription()).to.equal('Sauternes 1-er Grand Cru Classe AOC');
        });
    });
});