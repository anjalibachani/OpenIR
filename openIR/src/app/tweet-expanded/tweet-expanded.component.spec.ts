import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetExpandedComponent } from './tweet-expanded.component';

describe('TweetExpandedComponent', () => {
  let component: TweetExpandedComponent;
  let fixture: ComponentFixture<TweetExpandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetExpandedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
