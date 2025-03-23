import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAPIComponent } from './student-api.component';

describe('StudentAPIComponent', () => {
  let component: StudentAPIComponent;
  let fixture: ComponentFixture<StudentAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
