"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Listener = /** @class */ (function () {
    /**
     * @param param1 参数1
     * @param param2 参数2
     */
    function Listener(param1, param2) {
        // 设置属性
        this.enable = true;
        this.counter = -1;
        this.code = "";
        this.callback = null;
        // 设置属性
        var argumentCount = arguments.length;
        if (argumentCount == 1) {
            this.callback = param1;
        }
        else if (argumentCount == 2) {
            this.owner = param1;
            this.callback = param2;
        }
    }
    /**
     * 事件处理。
     *
     * @param sender 发出对象
     * @param parameters 参数集合
     */
    Listener.prototype.process = function (sender, parameters) {
        if (this.enable) {
            var owner = this.owner || sender;
            if (this.counter > 0) {
                this.counter--;
            }
            this.callback.call(owner, this, parameters[0], parameters[1], parameters[2], parameters[3], parameters[4], parameters[5]);
        }
    };
    return Listener;
}());
exports.Listener = Listener;
//# sourceMappingURL=Listener.js.map