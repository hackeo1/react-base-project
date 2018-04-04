import { Client } from '../classes/client';
import 'rxjs';
import {Observable} from 'rxjs/Observable';

export class ObserverClientService {

  constructor() {
    this.clientCounter = 0;
    this.clientObserver = new Observable;
    this.recursiveLimit = 100
  }

  getClient(recursive = false) {
    let _this = this;
    if (this.clientCounter === 0) {
      this.clientObserver =  Observable.create(function (observer) {
        _this.clientPush(observer, recursive);
      }).share();
    }
    return this.clientObserver;
  }

  getClients() {
    return this.getClient(true);
  }

  clientPush(observer, recursive) {
    setTimeout(() => {
      this.clientCounter++;
      let currentClient = new Client(`clientNumber${this.clientCounter}`);
      observer.next(currentClient);
      if (recursive && this.clientCounter < this.recursiveLimit) {
        this.clientPush(observer, recursive)
      } else {
        this.clientCounter = 0;
        observer.complete();
      }
    }, 1000)
  }

}
