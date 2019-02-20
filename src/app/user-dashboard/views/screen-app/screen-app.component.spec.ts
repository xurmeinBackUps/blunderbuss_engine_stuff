import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenAppComponent } from './screen-app.component';

describe('ScreenAppComponent', () => {
  let component: ScreenAppComponent;
  let fixture: ComponentFixture<ScreenAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
