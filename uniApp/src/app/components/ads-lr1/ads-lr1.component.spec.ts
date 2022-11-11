import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsLr1Component } from './ads-lr1.component';

describe('AdsLr1Component', () => {
  let component: AdsLr1Component;
  let fixture: ComponentFixture<AdsLr1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsLr1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsLr1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
