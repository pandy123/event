"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringNode_1 = require("./StringNode");
function main() {
    var dd = new StringNode_1.StringNode("ddddd");
    var aa = new StringNode_1.StringNode("aaaaa");
    dd.listen(aa, "print", dd.print);
    aa.dispatch("print");
}
main();
//# sourceMappingURL=app.js.map