import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public emailValid = false;
  public email;
  constructor(public router: Router) { }

  ngOnInit(): void {

  }

  validateEmail(e) {
    console.log(e);
  }

  continue() {
      this.router.navigate(['/document-view']);
  }
}
