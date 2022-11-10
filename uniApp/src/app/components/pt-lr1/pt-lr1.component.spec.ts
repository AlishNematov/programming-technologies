import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtLr1Component } from './pt-lr1.component';

describe('PtLr1Component', () => {
  let component: PtLr1Component;
  let fixture: ComponentFixture<PtLr1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtLr1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtLr1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
