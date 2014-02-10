var Observer = (function () {

    function Observer() {
        this._handlers = [];
    }

    Observer.prototype.subscribe = function (handler) {
        this._handlers.push(handler);
    };

    Observer.prototype.unsubscribe = function (handler) {
        var i = 0, length = this._handlers.length;

        for (; i < length; i++) {
            if (this._handlers[i] === handler) {
                this._handlers.splice(i, 1);
                return;
            }
        }
    };

    Observer.prototype.publish = function (data) {
        var i = 0, length = this._handlers.length;

        for (; i < length; i++) {
            this._handlers[i](data);
        }
    };

    return Observer;
})();