import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleshComponent } from './flesh.component';

describe('FleshComponent', () => {
  let component: FleshComponent;
  let fixture: ComponentFixture<FleshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
