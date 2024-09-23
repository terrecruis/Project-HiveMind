import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaCreationFormComponent } from './idea-creation-form.component';

describe('IdeaCreationFormComponent', () => {
  let component: IdeaCreationFormComponent;
  let fixture: ComponentFixture<IdeaCreationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdeaCreationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeaCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
