import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePageItem } from './store-page-item';

describe('StorePageItem', () => {
  let component: StorePageItem;
  let fixture: ComponentFixture<StorePageItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorePageItem],
    }).compileComponents();

    fixture = TestBed.createComponent(StorePageItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
