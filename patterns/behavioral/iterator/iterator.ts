class Iterator {
    private _cursor:number;
    private _items:Array<any>;

    constructor(items) {
        this._cursor = 0;
        this._items = items;
    }

    current() {
        return this._items[this._cursor];
    }

    first() {
        this.reset();
        return this.current();
    }

    next() {
        if (this.hasNext()) {
            this._cursor++;
            return this.current();
        }
    }

    previous() {
        if (this.hasPrevious()) {
            this._cursor--;
            return this.current();
        }
    }

    last() {
        this._cursor = this._items.length - 1;
        return this.current();
    }

    hasNext() {
        return this._cursor < this._items.length;
    }

    hasPrevious() {
        return this._cursor > 0;
    }

    reset() {
        this._cursor = 0;
    }

    each(fn) {
        var item = this.first();
        for (; this.hasNext(); item = this.next()) {
            fn(item);
        }
    }
}