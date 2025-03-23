import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipcartappComponent } from './flipcartapp.component';

describe('FlipcartappComponent', () => {
  let component: FlipcartappComponent;
  let fixture: ComponentFixture<FlipcartappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipcartappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipcartappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
