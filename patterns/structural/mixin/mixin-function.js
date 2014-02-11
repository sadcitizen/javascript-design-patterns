/**
 * Базовый класс
 * */
var BookFunctional = (function () {

    function BookFunctional(author, title) {
        this._title = title;
        this._author = author;
    }

    BookFunctional.prototype.getInfo = function () {
        return this._author + ' - ' + this._title;
    };

    return BookFunctional;
})();

/**
 * Сама примесь
 * */
var BookFunctionalMixin = function () {

    this.getAuthor = function () {
        return this._author;
    };

    this.getTitle = function () {
        return this._title;
    };

    return this;
};

/**
 * Применение: BookFunctionalMixin.call(BookFunctional.prototype);
 * */