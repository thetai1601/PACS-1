import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InrecordListComponent } from './inrecord-list.component';

describe('InrecordListComponent', () => {
  let component: InrecordListComponent;
  let fixture: ComponentFixture<InrecordListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InrecordListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InrecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
