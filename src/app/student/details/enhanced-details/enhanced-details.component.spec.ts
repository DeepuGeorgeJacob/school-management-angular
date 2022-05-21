import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancedDetailsComponent } from './enhanced-details.component';

describe('EnhancedDetailsComponent', () => {
  let component: EnhancedDetailsComponent;
  let fixture: ComponentFixture<EnhancedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnhancedDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnhancedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
