import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildCompareComponent } from './build-compare.component';

describe('BuildCompareComponent', () => {
  let component: BuildCompareComponent;
  let fixture: ComponentFixture<BuildCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildCompareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuildCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
