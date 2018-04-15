import { Dispatcher } from './Dispatcher';
export class StringNode extends Dispatcher {
   public value: string;
   constructor(value?: string) {
      super();

      this.value = value as any;
   }

   public print() {
      console.log(this.value);
   }

}