"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Listener_1 = require("./Listener");
var Listeners = /** @class */ (function () {
    /**
     * 构造处理。
     *
     * @param sender 发送者
     */
    function Listeners(sender) {
        // 设置属性
        this.enable = true;
        this.sender = sender || this;
        this.code = '';
        this.listeners = new Array();
    }
    /**
     * 查找一个监听器。
     *
     * @param owner 处理对象
     * @param callback 处理函数
     * @return 监听器
     */
    Listeners.prototype.find = function (owner, callback, p1, p2, p3, p4, p5) {
        var listeners = this.listeners;
        if (listeners) {
            var count = listeners.length;
            for (var i = 0; i < count; i++) {
                var listener = listeners[i];
                if ((listener.owner === owner) && (listener.callback === callback)) {
                    var parameters = listener.parameters;
                    if (parameters[0] == p1 && parameters[1] == p2 && parameters[2] == p3 && parameters[3] == p4 && parameters[4] == p5) {
                        return listener;
                    }
                }
            }
        }
        return null;
    };
    /**
     * 增加一个监听器。
     *
     * @param owner 处理对象
     * @param callback 处理函数
     * @return 监听器
     */
    Listeners.prototype.listen = function (owner, callback, p1, p2, p3, p4, p5) {
        // 检查是否已经注册
        var listener = this.find(owner, callback, p1, p2, p3, p4, p5);
        if (!listener) {
            // 注册监听器
            listener = new Listener_1.Listener();
            listener.owner = owner;
            listener.parameters = [p1, p2, p3, p4, p5];
            listener.callback = callback;
            this.push(listener);
        }
        // 返回监听器
        return listener;
    };
    /**
     * 移除一个监听器。
     *
     * @param owner 处理对象
     * @param callback 处理函数
     */
    Listeners.prototype.unlisten = function (owner, callback, p1, p2, p3, p4, p5) {
        // 检查是否已经注册
        var listener = this.find(owner, callback, p1, p2, p3, p4, p5);
        if (listener) {
            // 注销监听器
            this.remove(listener);
        }
    };
    /**
     * 添加一个监听器对象到当前管理器内。
     *
     * @param listener 监听器对象
     */
    Listeners.prototype.push = function (listener) {
        // 增加监听器
        var listeners = this.listeners;
        if (!listeners) {
            listeners = this.listeners = new Array();
        }
        listeners.push(listener);
    };
    /**
     * 移除一个监听器对象到当前管理器内。
     *
     * @param listener 监听器对象
     */
    Listeners.prototype.remove = function (listener) {
        var index = this.listeners.indexOf(listener);
        this.listeners.splice(index, 1);
    };
    /**
     * 允许一个监听器处理。
     *
     * @param owner 拥有者
     * @param method 函数
     * @param p1 参数1
     * @param p2 参数2
     * @param p3 参数3
     * @param p4 参数4
     * @param p5 参数5
     * @return 监听器
     */
    Listeners.prototype.enableListener = function (owner, method, p1, p2, p3, p4, p5) {
        var listener = this.find(owner, method, p1, p2, p3, p4, p5);
        if (listener) {
            listener.enable = true;
        }
        return listener;
    };
    /**
     * 禁止一个监听器处理。
     *
     * @param owner 拥有者
     * @param method 函数
     * @param p1 参数1
     * @param p2 参数2
     * @param p3 参数3
     * @param p4 参数4
     * @param p5 参数5
     * @return 监听器
     */
    Listeners.prototype.disableListener = function (owner, method, p1, p2, p3, p4, p5) {
        var listener = this.find(owner, method, p1, p2, p3, p4, p5);
        if (listener) {
            listener.enable = false;
        }
        return listener;
    };
    /**
     * 向所有监视器发出调用处理。
     *
     * @param parameters 参数集合
     */
    Listeners.prototype.process = function (p1, p2, p3, p4, p5) {
        if (this.enable) {
            var listeners = this.listeners;
            if (listeners) {
                // 逻辑处理
                var count = listeners.length;
                for (var i = 0; i < count; i++) {
                    var listener = listeners[i];
                    listener.process(this.sender, arguments);
                }
            }
        }
    };
    /**
     * 向所有监视器发出调用处理。
     *
     * @param parameters 参数集合
     */
    Listeners.prototype.dispatch = function () {
        var parameters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parameters[_i] = arguments[_i];
        }
        if (this.enable) {
            var listeners = this.listeners;
            if (listeners) {
                var count = listeners.length;
                for (var i = 0; i < count; i++) {
                    var listener = listeners[i];
                    listener.process(this.sender, parameters);
                }
            }
        }
    };
    /**
     * 清空处理。
     */
    Listeners.prototype.clear = function () {
        var listeners = this.listeners;
        if (listeners) {
            this.listeners = new Array();
        }
    };
    return Listeners;
}());
exports.Listeners = Listeners;
//# sourceMappingURL=Listeners.js.map