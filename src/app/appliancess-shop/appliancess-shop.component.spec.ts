import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliancessShopComponent } from './appliancess-shop.component';

describe('AppliancessShopComponent', () => {
  let component: AppliancessShopComponent;
  let fixture: ComponentFixture<AppliancessShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliancessShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppliancessShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
