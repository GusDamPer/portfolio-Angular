import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeEduComponent } from './expe-edu.component';

describe('ExpeEduComponent', () => {
  let component: ExpeEduComponent;
  let fixture: ComponentFixture<ExpeEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpeEduComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpeEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
