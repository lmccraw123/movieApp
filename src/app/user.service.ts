import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }
  
  regURL: string = 'https://lauren-spring-2018-phortonssf.c9users.io:8080/api/appUsers';
  logURL: string = 'https://lauren-spring-2018-phortonssf.c9users.io:8080/api/appUsers/login';
  
  data = {}
  
   register(user){
    return this._http.post(this.regURL, user)
  }
  
  login(login){
   return this._http.post(this.logURL, login)
  }
  
  


}
