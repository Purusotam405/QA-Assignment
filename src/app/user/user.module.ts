import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

import { UserRoutingModule } from "./user-routing.module";

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UserModule {}
