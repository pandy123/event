import { Listener } from './Listener';
export declare class Listeners {
    /** 有效标志 */
    enable: boolean;
    /** 代码 */
    code: string;
    /** 发送者 */
    sender: any;
    /** 监听集合 */
    listeners: Array<Listener>;
    /**
     * 构造处理。
     *
     * @param sender 发送者
     */
    constructor(sender?: any);
    /**
     * 查找一个监听器。
     *
     * @param owner 处理对象
     * @param callback 处理函数
     * @return 监听器
     */
    find(owner: any, callback: Function, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): Listener;
    /**
     * 增加一个监听器。
     *
     * @param owner 处理对象
     * @param callback 处理函数
     * @return 监听器
     */
    listen(owner: any, callback: Function, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): Listener;
    /**
     * 移除一个监听器。
     *
     * @param owner 处理对象
     * @param callback 处理函数
     */
    unlisten(owner: any, callback: Function, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): void;
    /**
     * 添加一个监听器对象到当前管理器内。
     *
     * @param listener 监听器对象
     */
    push(listener: Listener): void;
    /**
     * 移除一个监听器对象到当前管理器内。
     *
     * @param listener 监听器对象
     */
    remove(listener: Listener): void;
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
    enableListener(owner: any, method: Function, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): Listener;
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
    disableListener(owner: any, method: Function, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): Listener;
    /**
     * 向所有监视器发出调用处理。
     *
     * @param parameters 参数集合
     */
    process(p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): void;
    /**
     * 向所有监视器发出调用处理。
     *
     * @param parameters 参数集合
     */
    dispatch(...parameters: Array<any>): void;
    /**
     * 清空处理。
     */
    clear(): void;
}
/**
 * 监听器集合类型。
 */
export declare type ListenersMap = {
    [key: string]: Listeners;
};
