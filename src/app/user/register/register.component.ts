import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../_services/auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  public userForm: FormGroup;
  public message: string;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form();
  }

  ngOnInit(): void {
    this.authService.clearLocalS();
  }

  form() {
    this.userForm = this.fb.group({
      email: ["", Validators.required, Validators.email],
      password: ["", Validators.required, Validators.minLength(6)],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      role: ["User", Validators.required]
    });
  }

  register() {
    return this.authService.register(this.userForm.value).subscribe(
      () => {
        console.log("registration successful");
        this.router.navigateByUrl("/fixtures/fixture");
      },
      err => {
        console.error("error logging in", err);
        this.message = err.error;
        console.log(this.message);
      }
    );
  }
}
