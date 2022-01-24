import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import * as fixtureActions from "../state/fixture.actions";
import * as fromFixture from "../state/fixture.reducer";
import { FixtureService } from "../../_services/fixture.service";
import { Fixture } from "src/app/model/fixture";

@Component({
  selector: "app-fixture",
  templateUrl: "./fixture.component.html",
  styleUrls: ["./fixture.component.css"]
})
export class FixtureComponent implements OnInit {
  fixtures$: Observable<Fixture[]>;
  error$: Observable<string>;

  constructor(
    private data: FixtureService,
    private router: Router,
    private store: Store<fromFixture.AppState>
  ) {}

  ngOnInit(): void {
    // this.data.getData().subscribe(data => {
    //   this.fixtures$ = data;
    // });
    this.store.dispatch(new fixtureActions.LoadFixtures());
    this.fixtures$ = this.store.pipe(select(fromFixture.getFixtures));
    this.error$ = this.store.pipe(select(fromFixture.getError));
  }

  onClick(id: number) {
    this.router.navigate(["/fixtures/fixture", id]);
  }

  bet(id: number) {
    this.router.navigate(["/fixtures/bet", id]);
  }
}
