import { Listener } from './Listener';
import { ListenersMap } from './Listeners';
/**
 * 事件分发器。
 */
export declare class Dispatcher {
    /** 监听器集合字典 */
    protected _listenerss: ListenersMap;
    constructor();
    enableListen(dispatcher: Dispatcher, code: any, method: Function, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): Listener;
    disableListen(dispatcher: Dispatcher, code: any, method: Function, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): Listener;
    listen(dispatcher: Dispatcher, code: any, method: Function, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): Listener;
    unlisten(dispatcher: Dispatcher, code: any, method: Function, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): void;
    listenOne(dispatcher: Dispatcher, code: any, method: Function, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): Listener;
    match(listenerCode: string, code: String): boolean;
    findListener(code: any, owner: any, method: Function, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): Listener;
    addListener(code: any, owner: any, method: Function, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): Listener;
    removeListener(code: any, owner: any, method: Function, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): void;
    enableListener(code: any, owner: any, method: Function, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): Listener;
    disableListener(code: any, owner: any, method: Function, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): Listener;
    enableListeners(code: any): void;
    disableListeners(code: any): void;
    clearListeners(code: string): void;
    clearAllListeners(): void;
    dispatch(code: any, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): void;
}
