import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsComponentComponent } from './comments-component.component';

describe('CommentsComponentComponent', () => {
  let component: CommentsComponentComponent;
  let fixture: ComponentFixture<CommentsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
