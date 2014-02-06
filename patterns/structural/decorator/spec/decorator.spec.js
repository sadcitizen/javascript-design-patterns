describe('Декоратор / Decorator или Оболочка / Wrapper', function() {

    var beverage, vine;

    before(function () {
        beverage = new Beverage(100, 'Unknown beverage');
        vine = new Vine('Chateau Rieussec', 'white', 250, 'Sauternes 1-er Grand Cru Classe AOC');
    });

    it("Проверка инстанса Beverage", function () {
        expect(beverage).to.be.an.instanceOf(Beverage);
    });

    it("Проверка инстанса Vine", function () {
        expect(vine).to.be.an.instanceOf(Vine);
    });

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