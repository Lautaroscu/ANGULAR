import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsButtonsComponent } from './actions-buttons.component';

describe('ActionsButtonsComponent', () => {
  let component: ActionsButtonsComponent;
  let fixture: ComponentFixture<ActionsButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionsButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
