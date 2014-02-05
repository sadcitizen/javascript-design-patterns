var Singleton = (function () {
    var instance;

    function createInstance() {
        return {
            // Функциональность синглтона
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