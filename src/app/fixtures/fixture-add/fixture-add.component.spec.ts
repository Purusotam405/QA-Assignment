import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureAddComponent } from './fixture-add.component';

describe('FixtureAddComponent', () => {
  let component: FixtureAddComponent;
  let fixture: ComponentFixture<FixtureAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtureAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
