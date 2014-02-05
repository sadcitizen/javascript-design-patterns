var ClosureConstructorSingleton = new function () {
    var instance;

    // Конструктор
    function ClosureConstructorSingleton() {
        if (!instance) {
            instance = this;
        } else {
            return instance;
        }
    }

    // Приватные методы и свойства
    function _privateMethod() {
        //
    }

    // Публичные методы
    ClosureConstructorSingleton.prototype.toString = function () {
        return '[object ClosureConstructorSingleton]';
    };

    return ClosureConstructorSingleton;
};