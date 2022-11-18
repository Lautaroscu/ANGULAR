import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakingBadComponentComponent } from './breaking-bad-component.component';

describe('BreakingBadComponentComponent', () => {
  let component: BreakingBadComponentComponent;
  let fixture: ComponentFixture<BreakingBadComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakingBadComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakingBadComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
