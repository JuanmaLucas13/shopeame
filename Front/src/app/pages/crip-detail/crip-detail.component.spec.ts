import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CripDetailComponent } from './crip-detail.component';

describe('CripDetailComponent', () => {
  let component: CripDetailComponent;
  let fixture: ComponentFixture<CripDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CripDetailComponent]
    });
    fixture = TestBed.createComponent(CripDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
