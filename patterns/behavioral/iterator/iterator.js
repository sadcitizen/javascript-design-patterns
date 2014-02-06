var Iterator = function (items) {
    this._cursor = 0;
    this._items = items;
};

Iterator.prototype = {
    current: function () {
        return this._items[this._cursor];
    },

    first: function () {
        this.reset();
        return this.current();
    },

    next: function () {
        if (this.hasNext()) {
            this._cursor++;
            return this.current();
        }
    },

    previous: function () {
        if (this.hasPrevious()) {
            this._cursor--;
            return this.current();
        }
    },

    last: function () {
        this._cursor = this._items.length - 1;
        return this.current();
    },

    reset: function () {
        this._cursor = 0;
    },

    hasNext: function () {
        return this._cursor < this._items.length;
    },

    hasPrevious: function () {
        return this._cursor > 0;
    },

    each: function (callback) {
        var item = this.first();
        for(; this.hasNext(); item = this.next()) {
            callback(item);
        }
    }
};