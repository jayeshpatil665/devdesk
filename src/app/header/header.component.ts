import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  //Toggle Menu
  showFiller = false;

  constructor(private _snackBar: MatSnackBar) {}

  snd:any = new Audio("../../assets/audio/click-button.mp3");

   openSnackBar(msg:string,action:string) {
    console.log('Login btn clicked ! ');
    this.showFiller = !this.showFiller;
    this._snackBar.open(msg, action,{duration: 2000,horizontalPosition:'center',verticalPosition:'bottom'});
    //this._snackBar.openFromComponent(HeaderComponent);
    this.snd.play();
  }

 

  
}
