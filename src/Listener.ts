export class Listener {
   /** 有效标志 */
   public enable: boolean;
   /** 代码 */
   public code: string;
   /** 拥有者 */
   public owner: any;
   /** 函数 */
   public callback: Function;
   /** 参数集合 */
   public parameters: any;
   /** 计数器 */
   public counter: number;

   /**
    * @param param1 参数1
    * @param param2 参数2
    */
   public constructor(param1?: any, param2?: Function) {
      // 设置属性
      this.enable = true;
      this.counter = -1;
      this.code = "";
      this.callback = null as any;
      // 设置属性
      var argumentCount = arguments.length;
      if (argumentCount == 1) {
         this.callback = param1;
      } else if (argumentCount == 2) {
         this.owner = param1;
         this.callback = param2 as any;
      }
   }

   /**
    * 事件处理。
    *
    * @param sender 发出对象
    * @param parameters 参数集合
    */
   public process(sender: any, parameters: Array<any>): void {
      if (this.enable) {
         var owner = this.owner || sender;
         if (this.counter > 0) {
            this.counter--;
         }
         this.callback.call(owner, this, parameters[0], parameters[1], parameters[2], parameters[3], parameters[4], parameters[5]);
      }
   }
}
