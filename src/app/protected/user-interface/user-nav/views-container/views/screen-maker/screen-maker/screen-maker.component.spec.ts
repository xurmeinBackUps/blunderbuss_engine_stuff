import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenMakerComponent } from './screen-maker.component';

describe('ScreenMakerComponent', () => {
  let component: ScreenMakerComponent;
  let fixture: ComponentFixture<ScreenMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
