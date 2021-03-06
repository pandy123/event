"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Dispatcher_1 = require("./Dispatcher");
var StringNode = /** @class */ (function (_super) {
    __extends(StringNode, _super);
    function StringNode(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    StringNode.prototype.print = function () {
        console.log(this.value);
    };
    return StringNode;
}(Dispatcher_1.Dispatcher));
exports.StringNode = StringNode;
//# sourceMappingURL=StringNode.js.map