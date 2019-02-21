import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellcardMakerComponent } from './spellcard-maker.component';

describe('SpellcardMakerComponent', () => {
  let component: SpellcardMakerComponent;
  let fixture: ComponentFixture<SpellcardMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellcardMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellcardMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
