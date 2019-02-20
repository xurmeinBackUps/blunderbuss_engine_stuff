import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcBuilderAppComponent } from './pc-builder-app.component';

describe('PcBuilderAppComponent', () => {
  let component: PcBuilderAppComponent;
  let fixture: ComponentFixture<PcBuilderAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcBuilderAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcBuilderAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
