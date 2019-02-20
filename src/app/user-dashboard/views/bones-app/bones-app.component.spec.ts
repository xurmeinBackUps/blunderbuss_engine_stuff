import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonesAppComponent } from './bones-app.component';

describe('BonesAppComponent', () => {
  let component: BonesAppComponent;
  let fixture: ComponentFixture<BonesAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonesAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
