import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticateUserRequest } from 'src/Model/AuthinticateUserRequest';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy{

  ngOnInit(): void {
    console.log('Project Init Success !');
  }
  title = 'DevDesk-Angular';

  constructor(private authService : AuthService){
    //this.authenticateUser();
  }

  //Authenticate User
  authenticateUser(){
    let payload = new AuthenticateUserRequest();
    payload.userName = "user1";
    payload.password = "Secure512";
    payload.authCode = 512;

    this.authService.authenticateUser(payload).subscribe(
      (res) => {
        console.log('Backend response : ',res);

      },
      (error) => {
        console.log('Error Occured : '+JSON.stringify(error));
      },
      () =>{}
    );
  }


  ngOnDestroy(): void {
    //Logout User
  }

}
