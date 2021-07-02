import { Component, OnInit, ViewChild,ContentChild  } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild("UsernameInput") username;
  @ViewChild("PasswordInput") password;
  // @ViewChild(ShowHideInput) input: ShowHideInput;
  showPassword = false;


  constructor(
    private router: Router,
    private navCtrl: NavController,
    private alertCtrl: AlertController

  ) { }

  ngOnInit() {
  }
  async login() {
    let user = this.username.value;
    let pass = this.password.value;
    if (user == "test" && pass == "test") {
      this.router.navigate(['/home',
        {
          Identify: {
            Username: this.username.value,
            Password: this.password.value
          }
        }])
    }
    else {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Username or Password is worng.',
        buttons: ['Close']
      });
      await alert.present();
    }
  }

  // hideAndshow() {
  //   this.show = !this.show;
  //   console.log(this.password.value)
  //   if(this.show){
  //     console.log('text')
  //     this.password.value.changeType('text')
  //   }
  //   else{
  //     console.log('pass')
  //     this.password.value.changeType('text')
  //   }
  // }



}
