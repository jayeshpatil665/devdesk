import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticateUserRequest } from 'src/Model/AuthinticateUserRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url='http://localhost:8082/DevDesk';

  constructor(private http: HttpClient) { }

  //Global variables
  payload : AuthenticateUserRequest;

  headers = new HttpHeaders()
    .set('Content-type','application/json')
    .set('Accept','application/json')
    .set('timeout','35000');
  httpOptions = {headers:this.headers};


  authenticateUser(payload:AuthenticateUserRequest):Observable<AuthenticateUserRequest>{
    return this.http.post<AuthenticateUserRequest>(`${this.url}/login`,payload,this.httpOptions);
  }

}
