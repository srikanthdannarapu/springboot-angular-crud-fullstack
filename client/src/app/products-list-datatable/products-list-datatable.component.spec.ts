import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListDatatableComponent } from './products-list-datatable.component';

describe('ProductsListDatatableComponent', () => {
  let component: ProductsListDatatableComponent;
  let fixture: ComponentFixture<ProductsListDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsListDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
