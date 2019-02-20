import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceAppComponent } from './dice-app.component';

describe('DiceAppComponent', () => {
  let component: DiceAppComponent;
  let fixture: ComponentFixture<DiceAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
