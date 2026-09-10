import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPageItem } from './cart-page-item';

describe('CartPageItem', () => {
  let component: CartPageItem;
  let fixture: ComponentFixture<CartPageItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartPageItem],
    }).compileComponents();

    fixture = TestBed.createComponent(CartPageItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
