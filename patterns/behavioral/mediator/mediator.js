/**
 * Медиатор с каналами
 * */
var Mediator = (function () {

    var handlers = {};

    function Mediator () {

    }

    Mediator.prototype.on = function (channel, handler, data, context) {

    };

    Mediator.prototype.off = function(channel) {

    };

    Mediator.prototype.broadcast = function(data) {

    };

    Mediator.prototype.trigger = function(channel, data) {

    };

    return Mediator;
})();