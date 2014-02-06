// Подсистемы, которые будут сокрыты фасадом
function Cash(money) {
    this._money = money;
}

Cash.prototype.pay = function (payment) {
    // True - если денег хватило на покупки, false - если не хватило
    return this._money > payment;
};

function Cart() {
    this._items = []; // Корзина пустая
}

Cart.prototype.add = function (item) {
    this._items.push(item);
};

Cart.prototype.clean = function () {
    this._items = [];
};

Cart.prototype.getCost = function () {
    var i = 0, sum = 0, length = this._items.length;

    for(; i < length; i++){
        sum += this._items[i];
    }
};

function Warehouse() {
    this._goods = {
        milk: { count: 200, price: 6 },
        bread: { count: 150, price: 5 },
        meat: { count: 120, price: 20 }
    };
}

Warehouse.prototype.get = function (item) {
    this._goods[item].count--;
    return this._goods[item].price;
};

// Фасад
function Supermarket(shoppingList, money) {
    this._list = shoppingList;
    this._money = money;

    this._cash = new Cash(this._money);
    this._cart = new Cart();
    this._store = new Warehouse();
}

Supermarket.prototype.goShopping = function () {
    var i = 0, length = this._list.length;

    for(;i < length; i++) {
        this._cart.add(this._store.get(this._list[i]));
    }

    return this._cash.pay(this._cart.getCost());
}