import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleshAppComponent } from './flesh-app.component';

describe('FleshAppComponent', () => {
  let component: FleshAppComponent;
  let fixture: ComponentFixture<FleshAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleshAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleshAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
