var ClosureStaticSingleton = (function () {
    var instance;

    // Приватные методы

    function createInstance() {
        return {
            // Публичные методы
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }

            return instance;
        }
    };
})();