import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepinComponent } from './changepin.component';

describe('ChangepinComponent', () => {
  let component: ChangepinComponent;
  let fixture: ComponentFixture<ChangepinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangepinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
