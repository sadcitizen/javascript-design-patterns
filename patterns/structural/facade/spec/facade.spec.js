describe('Фасад / Facade', function () {

    var market, cash, cart, warehouse;

    before(function () {
        market = new Supermarket(['milk', 'bread', 'meat'], 100);
        cash = new Cash(100);
        cart = new Cart();
        warehouse = new Warehouse();
    });

    describe("Прверка инстансов", function () {

        it("Supermarket", function () {
            expect(market).to.be.an.instanceOf(Supermarket);
        });

        it("Cash", function () {
            expect(cash).to.be.an.instanceOf(Cash);
        });

        it("Cart", function () {
            expect(cart).to.be.an.instanceOf(Cart);
        });

        it("Warehouse", function () {
            expect(warehouse).to.be.an.instanceOf(Warehouse);
        });

    });



});