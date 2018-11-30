import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { O365Component } from './o365.component';

describe('O365Component', () => {
  let component: O365Component;
  let fixture: ComponentFixture<O365Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ O365Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(O365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
