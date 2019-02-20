import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellCardAppComponent } from './spell-card-app.component';

describe('SpellCardAppComponent', () => {
  let component: SpellCardAppComponent;
  let fixture: ComponentFixture<SpellCardAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellCardAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellCardAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
