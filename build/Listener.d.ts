export declare class Listener {
    /** 有效标志 */
    enable: boolean;
    /** 代码 */
    code: string;
    /** 拥有者 */
    owner: any;
    /** 函数 */
    callback: Function;
    /** 参数集合 */
    parameters: any;
    /** 计数器 */
    counter: number;
    /**
     * @param param1 参数1
     * @param param2 参数2
     */
    constructor(param1?: any, param2?: Function);
    /**
     * 事件处理。
     *
     * @param sender 发出对象
     * @param parameters 参数集合
     */
    process(sender: any, parameters: Array<any>): void;
}
