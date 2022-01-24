import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../_services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public userForm: FormGroup;
  public response: string;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form();
  }

  ngOnInit(): void {
    this.auth.clearLocalS();
  }

  form() {
    this.userForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  get f() {
    return this.userForm.controls;
  }

  login() {
    return this.auth.login(this.f.email.value, this.f.password.value).subscribe(
      resp => {
        this.response = resp.response;
        console.log(resp);
        this.router.navigateByUrl("/fixtures/fixture");
      },
      err => {
        console.error("error loggin in", err);
        this.response = err.error;
        console.log(this.response);
      }
    );
  }
}
