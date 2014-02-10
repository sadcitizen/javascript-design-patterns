describe('Фасад / Facade', function () {

    describe("Прверка инстансов", function () {

        var market, cash, cart, warehouse;

        before(function () {
            market = new Supermarket(['milk', 'bread', 'meat'], 100);
            cash = new Cash(100);
            cart = new Cart();
            warehouse = new Warehouse({
                milk: { count: 200, price: 6 },
                bread: { count: 150, price: 5 },
                meat: { count: 120, price: 20 }
            });
        });

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

    describe('Cash', function () {

        var cash;

        before(function () {
            cash = new Cash(100);
        });

        it('Cash.pay', function() {
            expect(cash.pay(200)).to.be.false;
            expect(cash.pay(90)).to.be.true;
        });
    });

    describe('Cart', function () {

        var cart;

        before(function () {
            cart = new Cart();
        });

        it('Cart.add', function () {
            cart
                .add(100)
                .add(100)
                .add(100)
                .add(100);

            expect(cart.getCost()).to.equal(400);
        });

        it('Cart.clean', function () {
            cart.clean();

            expect(cart.getCost()).to.equal(0);
        });
    });

    describe('Warehouse', function () {

        var count, warehouse;

        beforeEach(function () {
            warehouse = new Warehouse({
                milk: { count: 200, price: 6 },
                bread: { count: 150, price: 5 },
                meat: { count: 120, price: 20 }
            });

            count = warehouse.getItemCount('milk');
        });

        it('Warehouse.getItem', function () {
            expect(warehouse.getItem('milk')).to.equal(6);
            expect(count - warehouse.getItemCount('milk')).to.equal(1);
        });

        it('Warehouse.getItemCount', function () {
            expect(warehouse.getItemCount('milk')).to.equal(200);
            expect(warehouse.getItemCount('bread')).to.equal(150);
            expect(warehouse.getItemCount('meat')).to.equal(120);
        });
    });

    describe('Supermarket', function () {

        var supermarket;

        before(function () {
            supermarket = new Supermarket(['milk', 'bread', 'meat'], 100, {
                milk: { count: 200, price: 6 },
                bread: { count: 150, price: 5 },
                meat: { count: 120, price: 20 }
            });
        });

        it('Supermarket.goShopping', function () {
            expect(supermarket.goShopping()).to.be.true;
        });

    });

});