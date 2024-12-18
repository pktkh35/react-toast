import * as React from 'react';
export const eventManager = {
    list: new Map(),
    emitQueue: new Map(),
  
    on(event, callback) {
      this.list.has(event) || this.list.set(event, []);
      this.list.get(event).push(callback);
      return this;
    },
  
    off(event, callback) {
      if (callback) {
        const cb = this.list.get(event).filter(cb => cb !== callback);
        this.list.set(event, cb);
        return this;
      }
      this.list.delete(event);
      return this;
    },
  
    cancelEmit(event) {
      const timers = this.emitQueue.get(event);
      if (timers) {
        timers.forEach(clearTimeout);
        this.emitQueue.delete(event);
      }
  
      return this;
    },

    emit(event, ...args) {
      this.list.has(event) &&
        this.list.get(event).forEach((callback) => {
          const timer = setTimeout(() => {
            callback(...args);
          }, 0);
  
          this.emitQueue.has(event) || this.emitQueue.set(event, []);
          this.emitQueue.get(event).push(timer);
        });
    }
  };
  