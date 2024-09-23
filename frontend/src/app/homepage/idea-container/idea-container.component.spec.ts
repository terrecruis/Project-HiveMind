import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaContainerComponent } from './idea-container.component';

describe('IdeaContainerComponent', () => {
  let component: IdeaContainerComponent;
  let fixture: ComponentFixture<IdeaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdeaContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
