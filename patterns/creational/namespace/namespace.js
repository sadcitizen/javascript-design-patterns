/**
 * Объект приложения, внутри которого будут определяться неймспейсы
 * */
var Namespace = (function () {

    function Namespace() {
    }

    function getUnit(unit) {

        var types = {
            'function': function () {
                return new unit();
            },
            'object': function () {
                return unit;
            }
        }, type = typeof unit;

        return types[type] ? types[type]() : undefined;
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
            current[parts[i]] = current[parts[i]] || ( i === length - 1 && getUnit(unit)) || {};
            current = current[parts[i]];
        }

        return current;
    };

    return new Namespace();
})();