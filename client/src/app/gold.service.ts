import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GoldService {

  constructor(private _http: HttpClient){

  }

  postGold(content){
    let tempObservable = this._http.post('/gold',content);
    tempObservable.subscribe(data => console.log("post this one task", data));
  }


}
