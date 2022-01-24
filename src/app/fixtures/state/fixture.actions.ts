import { Action as actions } from "@ngrx/store";

import { Fixture } from "../../model/fixture";

export enum FixtureActionTypes {
  LOAD_FIXTURES = "[Fixture] Load Fixtures",
  LOAD_FIXTURES_SUCCESS = "[Fixture] Load Fixtures Success",
  LOAD_FIXTURES_FAIL = "[Fixture] Load Fixtures Fail",
  LOAD_FIXTURE = "[Fixture] Load Fixture",
  LOAD_FIXTURE_SUCCESS = "[Fixture] Load Fixture Success",
  LOAD_FIXTURE_FAIL = "[Fixture] Load Fixture Fail",
  CREATE_FIXTURE = "[Fixture] Create Fixtures",
  CREATE_FIXTURE_SUCCESS = "[Fixture] Create Fixtures Success",
  CREATE_FIXTURE_FAIL = "[Fixture] Create Fixtures Fail",
  DELETE_FIXTURE = "[Fixture] Delete Fixtures",
  DELETE_FIXTURE_SUCCESS = "[Fixture] Delete Fixtures Success",
  DELETE_FIXTURE_FAIL = "[Fixture] Delete Fixtures Fail"
}

export class LoadFixtures implements actions {
  readonly type = FixtureActionTypes.LOAD_FIXTURES;
}

export class LoadFixturesSuccess implements actions {
  readonly type = FixtureActionTypes.LOAD_FIXTURES_SUCCESS;

  constructor(public payload: Fixture[]) {}
}

export class LoadFixturesFail implements actions {
  readonly type = FixtureActionTypes.LOAD_FIXTURES_FAIL;

  constructor(public payload: string) {}
}

export class LoadFixture implements actions {
  readonly type = FixtureActionTypes.LOAD_FIXTURE;

  constructor(public payload: number) {}
}

export class LoadFixtureSuccess implements actions {
  readonly type = FixtureActionTypes.LOAD_FIXTURE_SUCCESS;

  constructor(public payload: Fixture) {}
}

export class LoadFixtureFail implements actions {
  readonly type = FixtureActionTypes.LOAD_FIXTURE_FAIL;

  constructor(public payload: string) {}
}

export class CreateFixture implements actions {
  readonly type = FixtureActionTypes.CREATE_FIXTURE;

  constructor(public payload: Fixture) {}
}

export class CreateFixtureSuccess implements actions {
  readonly type = FixtureActionTypes.CREATE_FIXTURE_SUCCESS;

  constructor(public payload: Fixture) {}
}

export class CreateFixtureFail implements actions {
  readonly type = FixtureActionTypes.CREATE_FIXTURE_FAIL;

  constructor(public payload: string) {}
}

export class DeleteFixture implements actions {
  readonly type = FixtureActionTypes.DELETE_FIXTURE;

  constructor(public payload: number) {}
}

export class DeleteFixtureSuccess implements actions {
  readonly type = FixtureActionTypes.DELETE_FIXTURE_SUCCESS;

  constructor(public payload: number) {}
}

export class DeleteFixtureFail implements actions {
  readonly type = FixtureActionTypes.DELETE_FIXTURE_FAIL;

  constructor(public payload: string) {}
}

export type Action =
  | LoadFixture
  | LoadFixtureFail
  | LoadFixtureSuccess
  | LoadFixtures
  | LoadFixturesFail
  | LoadFixturesSuccess
  | DeleteFixture
  | DeleteFixtureFail
  | DeleteFixtureSuccess
  | CreateFixture
  | CreateFixtureFail
  | CreateFixtureSuccess;
