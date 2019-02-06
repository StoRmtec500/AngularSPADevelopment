import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShallowIntegrationComponent } from './shallow-integration.component';

describe('ShallowIntegrationComponent', () => {
  let component: ShallowIntegrationComponent;
  let fixture: ComponentFixture<ShallowIntegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShallowIntegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShallowIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
