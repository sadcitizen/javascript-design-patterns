var Iterator = (function () {

    function Iterator(items) {
        this._cursor = 0;
        this._items = items;
    }

    Iterator.prototype.current = function () {
        return this._items[this._cursor];
    };

    Iterator.prototype.first = function () {
        this.reset();
        return this.current();
    };

    Iterator.prototype.next = function () {
        if (this.hasNext()) {
            this._cursor++;
            return this.current();
        }
    };

    Iterator.prototype.previous = function () {
        if (this.hasPrevious()) {
            this._cursor--;
            return this.current();
        }
    };

    Iterator.prototype.last = function () {
        this._cursor = this._items.length - 1;
        return this.current();
    };

    Iterator.prototype.reset = function () {
        this._cursor = 0;
    };

    Iterator.prototype.hasNext = function () {
        return this._cursor < this._items.length;
    };

    Iterator.prototype.hasPrevious = function () {
        return this._cursor > 0;
    };

    Iterator.prototype.each = function (callback) {
        var item = this.first();
        for(; this.hasNext(); item = this.next()) {
            callback(item);
        }
    };

    return Iterator;
})();
