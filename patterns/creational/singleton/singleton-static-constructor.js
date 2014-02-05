function StaticConstructorSingleton() {

    if (typeof StaticConstructorSingleton.instance === 'object') {
        return StaticConstructorSingleton.instance;
    }

    StaticConstructorSingleton.instance = this;

    return this;
}

// Публичные методы
StaticConstructorSingleton.prototype.toString = function () {
    return '[object StaticConstructorSingleton]';
}