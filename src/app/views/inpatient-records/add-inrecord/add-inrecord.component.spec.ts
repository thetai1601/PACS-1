import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInrecordComponent } from './add-inrecord.component';

describe('AddInrecordComponent', () => {
  let component: AddInrecordComponent;
  let fixture: ComponentFixture<AddInrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInrecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
