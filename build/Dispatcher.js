"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Listeners_1 = require("./Listeners");
/**
 * 事件分发器。
 */
var Dispatcher = /** @class */ (function () {
    function Dispatcher() {
        this._listenerss = new Object();
    }
    Dispatcher.prototype.enableListen = function (dispatcher, code, method, p1, p2, p3, p4, p5) {
        var listener = dispatcher.findListener(code, this, method, p1, p2, p3, p4, p5);
        if (listener) {
            listener.enable = true;
        }
        return listener;
    };
    Dispatcher.prototype.disableListen = function (dispatcher, code, method, p1, p2, p3, p4, p5) {
        var listener = dispatcher.findListener(code, this, method, p1, p2, p3, p4, p5);
        if (listener) {
            listener.enable = false;
        }
        return listener;
    };
    Dispatcher.prototype.listen = function (dispatcher, code, method, p1, p2, p3, p4, p5) {
        if (dispatcher) {
            var listener = dispatcher.findListener(code, this, method, p1, p2, p3, p4, p5);
            if (!listener) {
                listener = dispatcher.addListener(code, this, method, p1, p2, p3, p4, p5);
            }
            return listener;
        }
        return null;
    };
    Dispatcher.prototype.unlisten = function (dispatcher, code, method, p1, p2, p3, p4, p5) {
        if (dispatcher) {
            var listener = dispatcher.findListener(code, this, method, p1, p2, p3, p4, p5);
            if (listener) {
                dispatcher.removeListener(code, this, method, p1, p2, p3, p4, p5);
            }
        }
    };
    Dispatcher.prototype.listenOne = function (dispatcher, code, method, p1, p2, p3, p4, p5) {
        if (dispatcher) {
            var listener = dispatcher.findListener(code, this, method, p1, p2, p3, p4, p5);
            if (!listener) {
                listener = dispatcher.addListener(code, this, method, p1, p2, p3, p4, p5);
                listener.counter = 1;
            }
            return listener;
        }
        return null;
    };
    Dispatcher.prototype.match = function (listenerCode, code) {
        if (listenerCode == '*' || code == '*') {
            return true;
        }
        return listenerCode == code;
    };
    Dispatcher.prototype.findListener = function (code, owner, method, p1, p2, p3, p4, p5) {
        var listenerss = this._listenerss;
        if (listenerss) {
            var listeners = listenerss[code];
            if (listeners) {
                var listener = listeners.find(owner, method, p1, p2, p3, p4, p5);
                return listener;
            }
        }
        return null;
    };
    Dispatcher.prototype.addListener = function (code, owner, method, p1, p2, p3, p4, p5) {
        // 获得监听器集合对象
        var listenerss = this._listenerss;
        if (!listenerss) {
            listenerss = this._listenerss = new Object();
        }
        // 获得监听器集合
        var listeners = listenerss[code];
        if (!listeners) {
            listeners = new Listeners_1.Listeners(this);
            listenerss[code] = listeners;
        }
        // 增加检查重复
        var listener = listeners.listen(owner, method, p1, p2, p3, p4, p5);
        return listener;
    };
    Dispatcher.prototype.removeListener = function (code, owner, method, p1, p2, p3, p4, p5) {
        var listenerss = this._listenerss;
        if (listenerss) {
            var listeners = listenerss[code];
            if (listeners) {
                listeners.unlisten(owner, method, p1, p2, p3, p4, p5);
            }
        }
    };
    Dispatcher.prototype.enableListener = function (code, owner, method, p1, p2, p3, p4, p5) {
        var listener = this.findListener(code, owner, method, p1, p2, p3, p4, p5);
        if (listener) {
            listener.enable = true;
        }
        return listener;
    };
    Dispatcher.prototype.disableListener = function (code, owner, method, p1, p2, p3, p4, p5) {
        var listener = this.findListener(code, owner, method, p1, p2, p3, p4, p5);
        if (listener) {
            listener.enable = false;
        }
        return listener;
    };
    Dispatcher.prototype.enableListeners = function (code) {
        var listenerss = this._listenerss;
        if (listenerss) {
            var listeners = listenerss[code];
            if (listeners) {
                listeners.enable = true;
            }
        }
    };
    Dispatcher.prototype.disableListeners = function (code) {
        var listenerss = this._listenerss;
        if (listenerss) {
            var listeners = listenerss[code];
            if (listeners) {
                listeners.enable = false;
            }
        }
    };
    Dispatcher.prototype.clearListeners = function (code) {
        var listenerss = this._listenerss;
        if (listenerss) {
            var listeners = listenerss[code];
            if (listeners) {
                listeners.clear();
            }
        }
    };
    Dispatcher.prototype.clearAllListeners = function () {
        var listenerss = this._listenerss;
        if (listenerss) {
            for (var name in listenerss) {
                var listeners = listenerss[name];
                listeners.clear();
            }
        }
    };
    Dispatcher.prototype.dispatch = function (code, p1, p2, p3, p4, p5) {
        var listenerss = this._listenerss;
        if (listenerss) {
            for (var listenersCode in listenerss) {
                if (this.match(listenersCode, code)) {
                    var listeners = listenerss[listenersCode];
                    listeners.process(p1, p2, p3, p4, p5);
                }
            }
        }
    };
    return Dispatcher;
}());
exports.Dispatcher = Dispatcher;
//# sourceMappingURL=Dispatcher.js.map