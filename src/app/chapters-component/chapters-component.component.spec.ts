import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersComponentComponent } from './chapters-component.component';

describe('ChaptersComponentComponent', () => {
  let component: ChaptersComponentComponent;
  let fixture: ComponentFixture<ChaptersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaptersComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaptersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
