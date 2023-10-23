import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeanComponent } from './mean.component';

describe('MeanComponent', () => {
  let component: MeanComponent;
  let fixture: ComponentFixture<MeanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeanComponent]
    });
    fixture = TestBed.createComponent(MeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
