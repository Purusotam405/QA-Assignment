import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import { FixtureService } from "../../_services/fixture.service";
import * as fixtureActions from "../state/fixture.actions";
import { Fixture } from "../../model/fixture";

@Injectable()
export class FixtureEffect {
  constructor(
    private actions$: Actions,
    private fixtureService: FixtureService
  ) {}

  @Effect()
  loadFixtures$: Observable<Action> = this.actions$.pipe(
    ofType<fixtureActions.LoadFixtures>(
      fixtureActions.FixtureActionTypes.LOAD_FIXTURES
    ),
    mergeMap((action: fixtureActions.LoadFixtures) =>
      this.fixtureService.getData().pipe(
        map(
          (fixtures: Fixture[]) =>
            new fixtureActions.LoadFixturesSuccess(fixtures)
        ),
        catchError(err => of(new fixtureActions.LoadFixturesFail(err)))
      )
    )
  );

  @Effect()
  loadFixture$: Observable<Action> = this.actions$.pipe(
    ofType<fixtureActions.LoadFixture>(
      fixtureActions.FixtureActionTypes.LOAD_FIXTURE
    ),
    mergeMap((action: fixtureActions.LoadFixture) =>
      this.fixtureService.getDataById(action.payload).pipe(
        map(
          (fixture: Fixture) => new fixtureActions.LoadFixtureSuccess(fixture)
        ),
        catchError(err => of(new fixtureActions.LoadFixtureFail(err)))
      )
    )
  );

  @Effect()
  createFixture$: Observable<Action> = this.actions$.pipe(
    ofType<fixtureActions.CreateFixture>(
      fixtureActions.FixtureActionTypes.CREATE_FIXTURE
    ),
    map((action: fixtureActions.CreateFixture) => action.payload),
    mergeMap((fixture: Fixture) =>
      this.fixtureService.addFixture(fixture).pipe(
        map(
          (newfixture: Fixture) =>
            new fixtureActions.CreateFixtureSuccess(newfixture)
        ),
        catchError(err => of(new fixtureActions.CreateFixtureFail(err)))
      )
    )
  );

  @Effect()
  deleteFixture$: Observable<Action> = this.actions$.pipe(
    ofType<fixtureActions.DeleteFixture>(
      fixtureActions.FixtureActionTypes.DELETE_FIXTURE
    ),
    map((action: fixtureActions.DeleteFixture) => action.payload),
    mergeMap((id: number) =>
      this.fixtureService.deleteFixture(id).pipe(
        map(() => new fixtureActions.DeleteFixtureSuccess(id)),
        catchError(err => of(new fixtureActions.DeleteFixtureFail(err)))
      )
    )
  );
}
