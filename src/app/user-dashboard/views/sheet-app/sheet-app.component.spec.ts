import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetAppComponent } from './sheet-app.component';

describe('SheetAppComponent', () => {
  let component: SheetAppComponent;
  let fixture: ComponentFixture<SheetAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
