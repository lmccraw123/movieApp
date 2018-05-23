import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={};

  constructor(private _router: Router, private _user: UserService) { }

  ngOnInit() {
  }

loginSubmit(){
  console.log(this.user)
  this._user.login(this.user)
      .subscribe( res => {
          console.log(res)
          sessionStorage.setItem('token', res.token);
          sessionStorage.setItem('userId', res.userId);
          this._router.navigate(['home']);
        })
}

}

