import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
user = {}

  constructor(private _router: Router, private _user: UserService) { }

  ngOnInit() {
  }
  
  doRegister(){
    console.log(this.user)
    this._user.register(this.user)
      .subscribe( res => {
          console.log(res)
          sessionStorage.setItem('token', res.token);
          sessionStorage.setItem('userId', res.userId);
          this._router.navigate(['home']);
        }
      )
  }

}
