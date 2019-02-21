import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroveComponent } from './grove.component';

describe('GroveComponent', () => {
  let component: GroveComponent;
  let fixture: ComponentFixture<GroveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
