import { StringNode } from './StringNode';
import { Dispatcher } from './Dispatcher';

function main() {
   var dd = new StringNode("ddddd");
   var aa = new StringNode("aaaaa");
   dd.listen(aa, "print", dd.print);
   aa.dispatch("print");
   dd.addListener("print", aa, aa.print);
   dd.dispatch("")
}
main();