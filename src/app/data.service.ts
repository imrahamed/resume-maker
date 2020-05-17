import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private _listners = new Subject<any>();
  private _resumeData = new Subject<any>();

  listen(): Observable<any> {
    return this._listners.asObservable();
  }

  sendMessage(filterBy) {
    this._listners.next(filterBy);
  }

  resumelisten(): Observable<any> {
    return this._resumeData.asObservable();
  }

  resumesendMessage(resume) {
    this._resumeData.next(resume);
  }

}
