import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login-register';
  // name_test: String = "";
  log_email:string;
  log_password:string;
  reg_email:string;
  reg_password:string;
  reg_conform_password:string;
  login(){

  }
  register(){
    if(this.log_email=="admin" && this.log_password=="admin"){
      // this.snackBar.open('Login Successful','',{duration:1000})
      alert("Login Successful")
  }else{
    // this.snackBar.open('Login error','',{duration:1000})
    alert("Login error")
  }

  }
}
