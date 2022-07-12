import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutpatientRecordsComponent } from './outpatient-records.component';

describe('OutpatientRecordsComponent', () => {
  let component: OutpatientRecordsComponent;
  let fixture: ComponentFixture<OutpatientRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutpatientRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutpatientRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
