import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcBuilderComponent } from './pc-builder.component';

describe('PcBuilderComponent', () => {
  let component: PcBuilderComponent;
  let fixture: ComponentFixture<PcBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
