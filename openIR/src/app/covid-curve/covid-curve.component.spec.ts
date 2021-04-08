import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidCurveComponent } from './covid-curve.component';

describe('CovidCurveComponent', () => {
  let component: CovidCurveComponent;
  let fixture: ComponentFixture<CovidCurveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidCurveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
