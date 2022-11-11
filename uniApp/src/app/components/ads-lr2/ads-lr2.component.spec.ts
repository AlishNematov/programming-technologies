import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsLr2Component } from './ads-lr2.component';

describe('AdsLr2Component', () => {
  let component: AdsLr2Component;
  let fixture: ComponentFixture<AdsLr2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsLr2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsLr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
