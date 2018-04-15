import { Listener } from './Listener';
import { Listeners, ListenersMap } from './Listeners';

/**
 * 事件分发器。
 */
export class Dispatcher {
   /** 监听器集合字典 */
   protected _listenerss: ListenersMap;
   constructor() {
      this._listenerss = new Object() as ListenersMap;
   }



   public enableListen(dispatcher: Dispatcher, code: any, method: Function, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): Listener {
      var listener = dispatcher.findListener(code, this, method, p1, p2, p3, p4, p5)
      if (listener) {
         listener.enable = true;
      }
      return listener;
   }

   public disableListen(dispatcher: Dispatcher, code: any, method: Function, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): Listener {
      var listener = dispatcher.findListener(code, this, method, p1, p2, p3, p4, p5)
      if (listener) {
         listener.enable = false;
      }
      return listener;
   }

   public listen(dispatcher: Dispatcher, code: any, method: Function, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): Listener {
      if (dispatcher) {
         var listener = dispatcher.findListener(code, this, method, p1, p2, p3, p4, p5);
         if (!listener) {
            listener = dispatcher.addListener(code, this, method, p1, p2, p3, p4, p5);
         }
         return listener;
      }
      return null as any;
   }

   public unlisten(dispatcher: Dispatcher, code: any, method: Function, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any) {
      if (dispatcher) {
         var listener = dispatcher.findListener(code, this, method, p1, p2, p3, p4, p5);
         if (listener) {
            dispatcher.removeListener(code, this, method, p1, p2, p3, p4, p5);
         }
      }
   }

   public listenOne(dispatcher: Dispatcher, code: any, method: Function, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): Listener {
      if (dispatcher) {
         var listener = dispatcher.findListener(code, this, method, p1, p2, p3, p4, p5);
         if (!listener) {
            listener = dispatcher.addListener(code, this, method, p1, p2, p3, p4, p5);
            listener.counter = 1;
         }
         return listener;
      }
      return null as any;
   }

   public match(listenerCode: string, code: String): boolean {
      if (listenerCode == '*' || code == '*') {
         return true;
      }
      return listenerCode == code;
   }

   public findListener(code: any, owner: any, method: Function, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): Listener {
      var listenerss = this._listenerss;
      if (listenerss) {
         var listeners = listenerss[code];
         if (listeners) {
            var listener = listeners.find(owner, method, p1, p2, p3, p4, p5);
            return listener as any;
         }
      }
      return null as any;
   }

   public addListener(code: any, owner: any, method: Function, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): Listener {
      // 获得监听器集合对象
      var listenerss = this._listenerss;
      if (!listenerss) {
         listenerss = this._listenerss = new Object() as ListenersMap;
      }
      // 获得监听器集合
      var listeners = listenerss[code];
      if (!listeners) {
         listeners = new Listeners(this);
         listenerss[code] = listeners;
      }
      // 增加检查重复
      var listener = listeners.listen(owner, method, p1, p2, p3, p4, p5);
      return listener;
   }

   public removeListener(code: any, owner: any, method: Function, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any) {
      var listenerss = this._listenerss;
      if (listenerss) {
         var listeners = listenerss[code];
         if (listeners) {
            listeners.unlisten(owner, method, p1, p2, p3, p4, p5);
         }
      }
   }


   public enableListener(code: any, owner: any, method: Function, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): Listener {
      var listener = this.findListener(code, owner, method, p1, p2, p3, p4, p5)
      if (listener) {
         listener.enable = true;
      }
      return listener;
   }

   public disableListener(code: any, owner: any, method: Function, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): Listener {
      var listener = this.findListener(code, owner, method, p1, p2, p3, p4, p5)
      if (listener) {
         listener.enable = false;
      }
      return listener;
   }



   public enableListeners(code: any) {
      var listenerss = this._listenerss;
      if (listenerss) {
         var listeners = listenerss[code];
         if (listeners) {
            listeners.enable = true;
         }
      }
   }

   public disableListeners(code: any) {
      var listenerss = this._listenerss;
      if (listenerss) {
         var listeners = listenerss[code];
         if (listeners) {
            listeners.enable = false;
         }
      }
   }

   public clearListeners(code: string) {
      var listenerss = this._listenerss;
      if (listenerss) {
         var listeners = listenerss[code];
         if (listeners) {
            listeners.clear();
         }
      }
   }

   public clearAllListeners() {
      var listenerss = this._listenerss;
      if (listenerss) {
         for (var name in listenerss) {
            var listeners = listenerss[name];
            listeners.clear();
         }
      }
   }

   public dispatch(code: any, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any) {
      var listenerss = this._listenerss;
      if (listenerss) {
         for (var listenersCode in listenerss) {
            if (this.match(listenersCode, code)) {
               var listeners = listenerss[listenersCode];
               listeners.process(p1, p2, p3, p4, p5);
            }
         }
      }
   }
}
