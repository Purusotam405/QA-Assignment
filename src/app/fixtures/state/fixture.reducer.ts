import * as fixtureActions from "./fixture.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";

import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import { Fixture } from "../../model/fixture";
import * as fromRoot from "../../state/app-state";

export interface FixtureState extends EntityState<Fixture> {
  selectedFixtureId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  fixtures: FixtureState;
}

export const fixtureAdapter: EntityAdapter<Fixture> = createEntityAdapter<
  Fixture
>();

export const defaultFixture: FixtureState = {
  ids: [],
  entities: {},
  selectedFixtureId: null,
  loading: false,
  loaded: false,
  error: ""
};

export const initialState = fixtureAdapter.getInitialState(defaultFixture);

export function fixtureReducer(
  state = initialState,
  action: fixtureActions.Action
): FixtureState {
  switch (action.type) {
    case fixtureActions.FixtureActionTypes.LOAD_FIXTURES_SUCCESS: {
      return fixtureAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case fixtureActions.FixtureActionTypes.LOAD_FIXTURES_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload
      };
    }

    case fixtureActions.FixtureActionTypes.LOAD_FIXTURE_SUCCESS: {
      return fixtureAdapter.addOne(action.payload, {
        ...state,
        selectedFixtureId: action.payload.id
      });
    }
    case fixtureActions.FixtureActionTypes.LOAD_FIXTURE_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    case fixtureActions.FixtureActionTypes.CREATE_FIXTURE_SUCCESS: {
      return fixtureAdapter.addOne(action.payload, state);
    }
    case fixtureActions.FixtureActionTypes.CREATE_FIXTURE_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    case fixtureActions.FixtureActionTypes.DELETE_FIXTURE_SUCCESS: {
      return fixtureAdapter.removeOne(action.payload, state);
    }
    case fixtureActions.FixtureActionTypes.DELETE_FIXTURE_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

const getFixtureFeatureState = createFeatureSelector<FixtureState>("fixtures");

export const getFixtures = createSelector(
  getFixtureFeatureState,
  fixtureAdapter.getSelectors().selectAll
);

export const getFixturesLoading = createSelector(
  getFixtureFeatureState,
  (state: FixtureState) => state.loading
);

export const getFixturesLoaded = createSelector(
  getFixtureFeatureState,
  (state: FixtureState) => state.loaded
);

export const getError = createSelector(
  getFixtureFeatureState,
  (state: FixtureState) => state.error
);
