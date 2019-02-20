import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroveAppComponent } from './grove-app.component';

describe('GroveAppComponent', () => {
  let component: GroveAppComponent;
  let fixture: ComponentFixture<GroveAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroveAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroveAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
