/**
 * Базовый класс
 * */
var BookLiteral = (function () {

    function BookLiteral(author, title) {
        this._title = title;
        this._author = author;
    }

    BookLiteral.prototype.getInfo = function () {
        return this._author + ' - ' + this._title;
    };

    return BookLiteral;
})();

/**
 * Сама примесь
 * */
var BookLiteralMixin = {

    getAuthor: function () {
        return this._author;
    },

    getTitle: function () {
        return this._title;
    }
};

/**
 * Применение: _.extend(BookLiteral.prototype, BookLiteralMixin);
 * Метод _.extend() скопирует все методы примеси в объект Book
 * */