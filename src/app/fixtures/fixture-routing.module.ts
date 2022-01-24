import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FixtureComponent } from "./fixture/fixture.component";
import { FixtureAddComponent } from "./fixture-add/fixture-add.component";
import { FixtureDetailComponent } from "./fixture-detail/fixture-detail.component";
import { BetComponent } from "./bet/bet.component";
import { BookingComponent } from "./booking/booking.component";

import { AccessGuard } from "../_guards/access.guard";
import { AuthGuard } from "../_guards/auth.guard";

const routes: Routes = [
  { path: "fixture", component: FixtureComponent },
  {
    path: "addFixture",
    component: FixtureAddComponent,
    canActivate: [AuthGuard, AccessGuard]
  },
  {
    path: "fixture/:id",
    component: FixtureDetailComponent,
    canActivate: [AuthGuard]
  },
  { path: "bet/:id", component: BetComponent, canActivate: [AuthGuard] },
  { path: "booking", component: BookingComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixtureRoutingModule {}
