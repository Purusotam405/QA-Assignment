import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { NavbarComponent } from "../navbar/navbar.component";
import { FixtureComponent } from "./fixture/fixture.component";
import { FixtureDetailComponent } from "./fixture-detail/fixture-detail.component";
import { FixtureAddComponent } from "./fixture-add/fixture-add.component";
import { BetComponent } from "./bet/bet.component";
import { BookingComponent } from "./booking/booking.component";

import { fixtureReducer } from "./state/fixture.reducer";
import { FixtureEffect } from "./state/fixture.effect";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { ToastrModule } from "ngx-toastr";
import { FixtureRoutingModule } from "./fixture-routing.module";

@NgModule({
  declarations: [
    FixtureComponent,
    FixtureDetailComponent,
    FixtureAddComponent,
    BetComponent,
    NavbarComponent,
    BookingComponent
  ],
  imports: [
    CommonModule,
    FixtureRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: "toast-top-right",
      easing: "ease-in"
    }),
    StoreModule.forFeature("fixtures", fixtureReducer),
    EffectsModule.forFeature([FixtureEffect])
  ]
})
export class FixtureModule {}
