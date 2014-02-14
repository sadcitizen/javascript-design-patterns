/**
 * Простой реестр, множество копий
 * */
var SimpleRegistry = (function () {

    function Registry() {
        /**
         * Место, где будут храниться записи
         * */
        this._storage = {};
    }

    /**
     * Внесение записи в реестр
     * */
    Registry.prototype.set = function (key, value) {
        this._storage[key] = value;
    };

    /**
     * Получение значения записи из реестра
     * */
    Registry.prototype.get = function (key) {
        return this._storage[key];
    };

    /**
     * Проверка существования записи в реестре
     * */
    Registry.prototype.has = function (key) {
        return this._storage[key] !== undefined;
    };

    return Registry;
})();

/**
 * Глобальный реестр, то есть реестр-синглтон
 * */
var SingletonRegistry = (function () {

    var _instance, _storage;

    // Конструктор
    function Registry() {
        if (!_instance) {
            _storage = {};
            _instance = this;
        } else {
            return _instance;
        }
    }

    /**
     * Внесение записи в реестр
     * */
    Registry.prototype.set = function (key, value) {
        _storage[key] = value;
    };

    /**
     * Получение значения записи из реестра
     * */
    Registry.prototype.get = function (key) {
        return _storage[key];
    };

    /**
     * Проверка существования записи в реестре
     * */
    Registry.prototype.has = function (key) {
        return _storage[key] !== undefined;
    };

    return Registry;
})();