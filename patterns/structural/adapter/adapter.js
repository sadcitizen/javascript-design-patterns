/**
 * Англичанин
 * */
var Englishman = (function () {

    function Englishman(firstname, lastname) {
        this._firstname = firstname;
        this._lastname = lastname;
    }

    Englishman.prototype.getFirstname = function () {
        return this._firstname;
    };

    Englishman.prototype.getLastname = function () {
        return this._lastname;
    };

    Englishman.prototype.introduce = function () {
        return 'My name is ' + this._firstname + ' ' + this._lastname;
    };

    Englishman.prototype.greet = function () {
        return 'Hello! How are you?';
    };

    return Englishman;
})();

/**
 * Итальянец
 * */
var Italian = (function () {

    function Italian(firstname, lastname) {
        this._firstname = firstname;
        this._lastname = lastname;
    }

    Italian.prototype.getFirstname = function () {
        return this._firstname;
    };

    Italian.prototype.getLastname = function () {
        return this._lastname;
    };

    Italian.prototype.introdurre = function () {
        return 'Il mio nome è ' + this._firstname + ' ' + this._lastname;
    };

    Italian.prototype.ciao = function () {
        return 'Ciao! Come stai?';
    };

    return Italian;
})();

/**
 * Адаптер итальянца к англичанину
 * */
var AdaptToEnglish = (function () {

    function Adapter(italian) {
        this._firstname = italian.getFirstname();
        this._lastname = italian.getLastname();
    }

    Adapter.prototype.introduce = function () {
        return 'My name is ' + this._firstname + ' ' + this._lastname;
    };

    Adapter.prototype.greet = function () {
        return 'Hello! How are you?';
    };

    return Adapter;
})();