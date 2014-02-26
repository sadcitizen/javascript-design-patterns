var Iterator = (function () {
    /**
     * Создает экземпляр итератора
     * @param {array} items Итерируемый массив
     * @constructor
     */
    function Iterator(items) {
        this._cursor = 0;
        this._items = items;
    }

    /**
     * Отдает текущий элемент массива
     * @returns {*}
     */
    Iterator.prototype.current = function () {
        return this._items[this._cursor];
    };

    /**
     * Сдвигает курсор в начальное положение и отдает первый элемент массив
     * @returns {*}
     */
    Iterator.prototype.first = function () {
        this.reset();
        return this.current();
    };

    /**
     * Сдвигает курсор на один шаг вперед и отдает элемент массива
     * @returns {*}
     */
    Iterator.prototype.next = function () {
        if (this.hasNext()) {
            this._cursor++;
            return this.current();
        }
    };

    /**
     * Сдвигает курсор на одни шаг назад и отдает элемент массива
     * @returns {*}
     */
    Iterator.prototype.previous = function () {
        if (this.hasPrevious()) {
            this._cursor--;
            return this.current();
        }
    };

    /**
     * Сдвигает курсор в конец и отдает последний элемент массива
     * @returns {*}
     */
    Iterator.prototype.last = function () {
        this._cursor = this._items.length - 1;
        return this.current();
    };

    /**
     * Сброс курсора в начальное положение
     */
    Iterator.prototype.reset = function () {
        this._cursor = 0;
    };

    /**
     * Проверяет есть ли после текущего элемента еще один элемент
     * @returns {boolean} Истина/ложь
     */
    Iterator.prototype.hasNext = function () {
        return this._cursor < this._items.length;
    };

    /**
     * Проверяет есть ли перед текущим элементом еще один элемент
     * @returns {boolean} Истина/ложь
     */
    Iterator.prototype.hasPrevious = function () {
        return this._cursor > 0;
    };

    /**
     * Проходит по массиву и для каждого из его элементов выполняет функцию callback
     * @param {function} callback Функция, которая будет выполнена для каждого элемента
     */
    Iterator.prototype.each = function (callback) {
        var item = this.first();
        for(; this.hasNext(); item = this.next()) {
            callback(item);
        }
    };

    return Iterator;
})();
