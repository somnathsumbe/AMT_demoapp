import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmRagistrationComponent } from './confirm-ragistration.component';

describe('ConfirmRagistrationComponent', () => {
  let component: ConfirmRagistrationComponent;
  let fixture: ComponentFixture<ConfirmRagistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmRagistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmRagistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
