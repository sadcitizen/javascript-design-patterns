/**
 * Простой реестр, множество копий
 * */
var SimpleRegistry = (function () {

    /**
     * Создает экземпляр
     * @constructor
     */
    function Registry() {
        /** Место, где будут храниться записи */
        this._storage = {};
    }

    /**
     * Вносит запись в реестр
     * @param {string} key Ключ записи реестра
     * @param {*} value Значение записи реестра
     */
    Registry.prototype.set = function (key, value) {
        this._storage[key] = value;
    };

    /**
     * Возвращает запись из реестра по ключу
     * @param {string} key Ключ записи реестра
     * @returns {*} Значение записи реестра
     */
    Registry.prototype.get = function (key) {
        return this._storage[key];
    };

    /**
     * Проверяет существование записи в реестре
     * @param {string} key Ключ записи в реестре
     * @returns {boolean} Истина/ложь
     */
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

    /**
     * Создает экземпляр реестра-синглтона
     * @constructor
     */
    function Registry() {
        if (!_instance) {
            _storage = {};
            _instance = this;
        } else {
            return _instance;
        }
    }
    /**
     * Дополнительно в конструктор можно передать
     * какое то значение по умолчанию, которое
     * отдавалось бы в случае обращения по
     * несуществующему ключу. В нашем же варианте
     * будет возвращаться undefined
     * */

    /**
     * Вносит запись в реестр
     * @param {string} key Ключ записи реестра
     * @param {*} value Значение записи реестра
     */
    Registry.prototype.set = function (key, value) {
        _storage[key] = value;
    };

    /**
     * Возвращает запись из реестра по ключу
     * @param {string} key Ключ записи реестра
     * @returns {*} Значение записи реестра
     */
    Registry.prototype.get = function (key) {
        return _storage[key];
    };

    /**
     * Проверяет существование записи в реестре
     * @param {string} key Ключ записи в реестре
     * @returns {boolean} Истина/ложь
     */
    Registry.prototype.has = function (key) {
        return _storage[key] !== undefined;
    };

    /**
     * В качестве дополнительного функционала можно добавить
     * метод reset() для очистки данных репозитория и
     * метод remove() для удаления какого конкретного значения
     * */

    return Registry;
})();