// Базовый конструктор, который будет декорирован
function Beverage(cost, desc) {
    this._cost = cost;
    this._desc = desc;
}

Beverage.prototype.getCost = function() {
    return this._cost;
};

Beverage.prototype.getDescription = function() {
    return this._desc;
};

// Конструктор декоратора
function Vine(name, color, cost, desc) {
    this._beverage = new Beverage(cost, desc);
    this._name = name;
    this._color = color;
}

Vine.prototype.getCost = function() {
    return this._beverage.getCost();
};

Vine.prototype.getDescription = function() {
    return this._beverage.getDescription();
};

Vine.prototype.getColor = function () {
    return this._color;
};

Vine.prototype.getName = function () {
    return this._name;
};