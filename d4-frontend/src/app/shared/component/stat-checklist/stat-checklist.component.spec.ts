import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatChecklistComponent } from './stat-checklist.component';

describe('StatChecklistComponent', () => {
  let component: StatChecklistComponent;
  let fixture: ComponentFixture<StatChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatChecklistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
