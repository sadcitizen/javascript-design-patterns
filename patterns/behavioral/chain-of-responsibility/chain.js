/**
 * Цепочка обязаностей / Chain of Responsibility
 * */
var TodoList = (function () {

    /**
     * Создает экземпляр TodoList
     * @constructor
     * @this {TodoList}
     */
    function TodoList() {
        this._todos = {};
    }

    /**
     * Добавляет дело в список
     * @param {string} title Заголовок дела
     * @param {string} text Текст дела
     * @returns {TodoList} Ссылка на самого себя
     */
    TodoList.prototype.add = function (title, text) {
        if (this._todos[title] === undefined) {
            this._todos[title] = text;
        }

        return this;
    };

    /**
     * Отдает текст дела по его заголовку
     * @param {string} title Заголовок дела
     * @returns {string} Текст дела
     */
    TodoList.prototype.get = function (title) {
        return this._todos[title];
    };

    /**
     * Удаляет дело по его заголовку
     * @param {string} title Заголовк дела
     * @returns {TodoList}
     */
    TodoList.prototype.remove = function (title) {
        delete this._todos[title];

        return this;
    };

    /**
     * Редактирует заведенное дело
     * @param {string} title Заголовок дела
     * @param {string} text Текст дела
     * @returns {TodoList}
     */
    TodoList.prototype.edit = function (title, text) {
        if (this._todos[title] !== undefined) {
            this._todos[title] = text;
        }

        return this;
    };

    /**
     * Очищает список дел
     * @returns {TodoList}
     */
    TodoList.prototype.clean = function () {
        this._todos = {};

        return this;
    };

    return TodoList;
})();