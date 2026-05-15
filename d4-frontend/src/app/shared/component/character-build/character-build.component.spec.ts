import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterBuildComponent } from './character-build.component';

describe('CharacterBuildComponent', () => {
  let component: CharacterBuildComponent;
  let fixture: ComponentFixture<CharacterBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterBuildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
