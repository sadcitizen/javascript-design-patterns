var ClosureStaticSingleton = (function () {
    var instance;

    function createInstance() {
        // Приватные методы
        function _privateMethod () {

        }

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