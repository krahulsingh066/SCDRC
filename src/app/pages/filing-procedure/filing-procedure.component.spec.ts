import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilingProcedureComponent } from './filing-procedure.component';

describe('FilingProcedureComponent', () => {
  let component: FilingProcedureComponent;
  let fixture: ComponentFixture<FilingProcedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilingProcedureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilingProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
