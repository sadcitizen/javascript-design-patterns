/**
 * Объект приложения, внутри которого будут определяться неймспейсы
 * */
var Namespace = (function () {

    function Namespace() {
    }

    /**
     * Метод, который создает неймспейс
     * @param target {object} объект приложения, в котором создается неймспейс
     * @param hash {string} строка неймспейса
     * @param unit {(object|function)} модуль приложения
     * */
    Namespace.prototype.create = function (target, hash, unit) {
        var parts = hash.split('.'),
            length = parts.length,
            i = 0,
            current = target;

        for (; i < length; i++) {
            if (current[parts[i]] === undefined) {
                current[parts[i]] = {};
            }
            current = current[parts[i]];
        }

        //TODO: Избавиться от _.extend()
        if (typeof unit === 'function') {
            _.extend(current, new unit());
        }

        if (typeof unit === 'object') {
            _.extend(current, unit);
        }

        return current;
    };

    return new Namespace();
})();