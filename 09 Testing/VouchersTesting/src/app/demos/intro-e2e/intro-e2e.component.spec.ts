import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroE2eComponent } from './intro-e2e.component';

describe('IntroE2eComponent', () => {
  let component: IntroE2eComponent;
  let fixture: ComponentFixture<IntroE2eComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroE2eComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroE2eComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
