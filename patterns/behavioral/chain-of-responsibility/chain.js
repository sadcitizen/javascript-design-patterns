/**
 * Цепочка обязаностей / Chain of Responsibility
 * */
var TodoList = (function () {

    function TodoList() {
        this._todos = {};
    }

    TodoList.prototype.add = function (title, text) {
        if (this._todos[title] === undefined) {
            this._todos[title] = text;
        }

        return this;
    };

    TodoList.prototype.get = function (title) {
        return this._todos[title];
    };

    TodoList.prototype.remove = function (title) {
        delete this._todos[title];

        return this;
    };

    TodoList.prototype.edit = function (title, text) {
        if (this._todos[title] !== undefined) {
            this._todos[title] = text;
        }

        return this;
    };

    TodoList.prototype.clean = function () {
        this._todos = {};

        return this;
    };

    return TodoList;
})();