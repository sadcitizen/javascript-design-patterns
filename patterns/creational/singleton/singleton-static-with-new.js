function NewSingleton() {

    if (typeof NewSingleton.instance === 'object') {
        return NewSingleton.instance;
    }

    NewSingleton.instance = this;

    return this;
}

NewSingleton.prototype.toString = function () {
    return '[object NewSingleton]';
}