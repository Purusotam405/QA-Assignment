import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import * as fixtureActions from "../state/fixture.actions";
import * as fromFixture from "../state/fixture.reducer";
import { Fixture } from "../../model/fixture";
import { FixtureService } from "../../_services/fixture.service";
import { AuthService } from "../../_services/auth.service";

@Component({
  selector: "app-fixture-detail",
  templateUrl: "./fixture-detail.component.html",
  styleUrls: ["./fixture-detail.component.css"]
})
export class FixtureDetailComponent implements OnInit {
  public fixture;
  public error$: Observable<string>;

  constructor(
    private data: FixtureService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private store: Store<fromFixture.AppState>
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.data.getDataById(id).subscribe(resp => {
      this.fixture = resp;
    });
  }

  delete(id: number) {
    this.store.dispatch(new fixtureActions.DeleteFixture(id));
    this.router.navigate(["/fixtures/fixture"]);
  }

  accessControl(): boolean {
    if (this.auth.isAdmin()) {
      return true;
    }
  }
}
