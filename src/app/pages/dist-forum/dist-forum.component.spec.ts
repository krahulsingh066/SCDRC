import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistForumComponent } from './dist-forum.component';

describe('DistForumComponent', () => {
  let component: DistForumComponent;
  let fixture: ComponentFixture<DistForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistForumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
