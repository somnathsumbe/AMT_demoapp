import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacktosearchComponent } from './backtosearch.component';

describe('BacktosearchComponent', () => {
  let component: BacktosearchComponent;
  let fixture: ComponentFixture<BacktosearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacktosearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacktosearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
